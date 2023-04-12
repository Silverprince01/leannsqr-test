import { useContext } from "react";
import { ValueContext } from "../context";
import "./Filters.scss";
type Props = {
  userData?: any;
  showFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Filters = ({ userData, showFilter }: Props) => {
  const { name, email, phone } = useContext(ValueContext);
  const [nam,setNam] = name;
  const [mail,setMail] = email;
  const [phon,setPhone] = phone;
  return (
    <form action="">
      <div className="filters">
        <div className="filter">
          <div className="subject">
            <p className="topic">Organisation</p>
            <select name="" id="">
              <option value="">Select</option>
              {userData.map((org: any) => (
                <option key={org.id} value={org.orgName.toUpperCase()}>
                  {org.orgName.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="subject">
            <p className="topic">UserName</p>
            <input
              type="text"
              placeholder="User"
              onChange={(e) => setNam(() => e.target.value)}
            />
          </div>
          <div className="subject">
            <p className="topic">Email</p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              onChange={(e) => setMail(() => e.target.value)}
            />
          </div>
          <div className="subject">
            <p className="topic">Date</p>
            <input type="date" name="" id="" placeholder="Date" />
          </div>
          <div className="subject">
            <p className="topic">Phone Number</p>
            <input
              type="number"
              placeholder="Phone Number"
              onChange={(e) => setPhone(() => e.target.value)}
            />
          </div>
          <div className="subject">
            <p className="topic">Status</p>
            <select name="" id="">
              <option value="">--Select--</option>
              <option value="">ACTIVE</option>
              <option value="">INACTIVE</option>
              <option value="">BLACKLISTED</option>
              <option value="">PENDING</option>
            </select>
          </div>
          <div className="submit">
            <button className="reset">Reset</button>
            <button
              type="submit"
              className="filter"
              onClick={() => showFilter((prev:boolean) => !prev)}
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
