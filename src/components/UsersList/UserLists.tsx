import  {  useState } from "react";
import { DesktopTable } from "./component/DeskTopTable";
import { MobileTable } from "./component/MobileTable";
import { Filters } from "../Filter/Filters";
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
          {filter ? <Filters userData={userData} showFilter={showFilter} /> : null}
          {width > 768 ? (
            <DesktopTable userData={userData} showFilter={showFilter} />
          ) : (
            <MobileTable userData={userData} showFilter={showFilter}/>
          )}
        </div>
    </div>
  );
};
