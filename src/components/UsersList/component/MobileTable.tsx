import React, { useState, useContext } from "react";
import { ValueContext } from "../../context";
import { Detail } from "../../Details/Detail";
import { Filter, More } from "../../../assets";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TablePagination from "@mui/material/TablePagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
type Props = {
  userData: any;
  showFilter: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MobileTable = ({ userData, showFilter }: Props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userData.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [view, setView] = useState(false);
  const [id, setId] = useState(0);
  const { value } = useContext(ValueContext);
  const [val, setValue] = value;
  return (
    <div className="contain">
      <div className="use">
        <p>Users</p>
        <div className="filt">
          <p>Filter</p>
          <i
            style={{ cursor: "pointer" }}
            onClick={() => showFilter((prev: boolean) => !prev)}
          >
            <FontAwesomeIcon icon={faFilter} />
          </i>
        </div>
      </div>
      {(rowsPerPage > 0
        ? userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : userData
      ).map((data: any) => {
        return (
          <div className="card" key={data.id} onClick={() => showFilter(false)}>
            <div className="top">
              <div className="">
                <div className="middle">
                  <div className="user">
                    <p className="font-[500] text-[16px]">
                      {data.profile.firstName} {data.profile.lastName}
                    </p>
                    <div
                      className="cursor"
                      onClick={() => {
                        setId(data.id);
                        setView(!view);
                      }}
                    >
                      {data.id === id && view ? (
                        <i>
                          <FontAwesomeIcon icon={faAngleUp} />
                        </i>
                      ) : (
                        <i>
                          <FontAwesomeIcon icon={faAngleDown} />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "18px" }} className="text-[#828282]">
                  {data.email}
                </p>
              </div>
              <div className="" onClick={() => setValue(data.id)}>
                <img src={More} alt="" />
              </div>
              {val === data.id ? (
                <div
                  className=" deta"
                  style={{
                    position: "absolute",
                    right: "0",
                  }}
                >
                  <Detail />
                </div>
              ) : (
                val === 0
              )}
            </div>
            <div
              className={`bottom ${
                view && id === data.id ? `relative ` : `hidden`
              }`}
            >
              <p>
                {data.profile.firstName} {data.profile.lastName}{" "}
              </p>
              <p>{data.profile.phoneNumber}</p>
              <p>{data.createdAt}</p>
            </div>
          </div>
        );
      })}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={3}
        count={userData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </div>
  );
};
