import { NpActive, NpMoney, NPLoan, NpUser } from "../../assets";
import "./Users.scss";
type Props={
  userData?:any
}
export const Users = ({userData}:Props) => {
  const users: { id: number; icon: any; title: string; quantity: number }[] = [
    { id: 0, icon: NpUser, title: "USERS", quantity: 2453 },
    { id: 1, icon: NpActive, title: "ACTIVE USERS", quantity: 2453 },
    { id: 2, icon: NPLoan, title: "USERS WITH SAVINGS", quantity: 12453 },
    { id: 3, icon: NpMoney, title: "USERS WITH LOANS", quantity: 102453 },
  ];
  return (
    <div className="userHeader">
      <h2>Users</h2>
      <div className="cardContainer">
        {/* {users.map((user) => { */}
          {/* return ( */}
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
          {/* ); */}
        {/* })} */}
      </div>
    </div>
  );
};
