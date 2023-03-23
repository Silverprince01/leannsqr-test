import * as React from "react";
import { useContext } from "react";
import { Filter, More } from "../../../assets";
import { ValueContext } from "../../context";
import { Detail } from "../../Details/Detail";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
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
  userData?: any;
  showFilter: React.Dispatch<React.SetStateAction<boolean>>;
};
export const DesktopTable = ({ userData, showFilter }: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { value } = useContext(ValueContext);
  const [val, setValue] = value

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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              style={{ width: 160 }}
              onClick={() => showFilter((prev: boolean) => !prev)}
            >
              Organisation <img src={Filter} alt="" />
            </TableCell>
            <TableCell
              align="left"
              style={{ width: 160 }}
              onClick={() => showFilter((prev: boolean) => !prev)}
            >
              User Name <span>  <img src={Filter} alt="" /></span> 
            </TableCell>
            <TableCell align="left" style={{ width: 160 }}>
              Email <span>  <img src={Filter} alt="" /></span> 
            </TableCell>
            <TableCell align="left" style={{ width: 160 }}>
              Phone Number <span>  <img src={Filter} alt="" /></span> 
            </TableCell>
            <TableCell align="left" style={{ width: 160 }}>
              Date Joined <span>  <img src={Filter} alt="" /></span> 
            </TableCell>
            <TableCell align="left" style={{ width: 160 }}>
              Status <span>  <img src={Filter} alt="" /></span> 
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody onClick={() => showFilter(false)}>
        
          {(rowsPerPage > 0
            ? userData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : userData
          ).map((row: any) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" style={{ width: 160 }}>
                {row.orgName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.userName} 
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.phoneNumber}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.createdAt}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Pending
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="right"
                onClick={() => setValue(row.id)}
              >
                <img src={More} alt="" />
              </TableCell>
              {val === row.id ? (
                <div className=" deta">
                  <Detail />
                </div>
              ) : (
                val === 0
              )}
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
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
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
