import React, { useEffect, useState, useContext } from "react";

import { DesktopTable } from "./component/DeskTopTable";
import { MobileTable } from "./component/MobileTable";
import { ValueContext } from "../context";
import { Filters } from "../Filter/Filters";
import { Detail } from "../Details/Detail";
import Loader from "../Loader";
import useWindowSize from "../../hook/useWindowSize";
import "./UserList.scss";

type Props ={
  userData?:any
}

export const UserLists = ({userData}:Props) => {
  const [filter, showFilter] = useState<boolean>(false);
  const { width } = useWindowSize();


  return (
    <div className="">
        <div
          style={{ padding: "40px 0", position: "relative" }}
          className="table"
        >
          {filter ? <Filters userData={userData} /> : null}
          {width > 768 ? (
            <DesktopTable userData={userData} showFilter={showFilter} />
          ) : (
            <MobileTable userData={userData} showFilter={showFilter}/>
          )}
        </div>
    </div>
  );
};
