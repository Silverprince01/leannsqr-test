import { NpActive, NpMoney, NPLoan, NpUser } from "../../assets";
import "./Users.scss";
type Props={
  userData?:any
}
export const Users = ({userData}:Props) => {
  return (
    <div className="userHeader">
      <h2>Users</h2>
      <div className="cardContainer">
            <div className="card" >
              <img src={NpUser} alt="" />
              <p className="title">USERS  </p>
              <p className="numbers">{userData.length}</p>
            </div>
            <div className="card" >
              <img src={NpActive} alt="" />
              <p className="title">ACTIVE USERS  </p>
              <p className="numbers">{userData.length}</p>
            </div>
            <div className="card" >
              <img src={NPLoan} alt="" />
              <p className="title">USERS WITH SAVINGS </p>
              <p className="numbers">{userData.length}</p>
            </div>
            <div className="card" >
              <img src={NpMoney} alt="" />
              <p className="title">USERS WITH LOANS  </p>
              <p className="numbers">{userData.length}</p>
            </div>
      </div>
    </div>
  );
};
