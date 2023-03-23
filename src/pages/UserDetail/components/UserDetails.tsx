import { useState, useEffect, useContext } from "react";
import { ValueContext } from "../../../components/context";
import { Avatar, Back } from "../../../assets";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import "./UserDetails.scss";
// interface User {
//   profile: any;
//   firstName: any;
// }
export const UserDetailSection: React.FC = () => {
  let [user, setUser] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const { value } = useContext(ValueContext);
  const [val, setVal] = value
  const [active, setActive] = useState(0);
  const information: { id: number; title: string }[] = [
    { id: 0, title: "General Details" },
    { id: 1, title: "Documents" },
    { id: 2, title: "Bank Details" },
    { id: 3, title: "Loans" },
    { id: 4, title: "Savings" },
    { id: 5, title: "App and System" },
  ];
  // const teacher: any = {
  //   name: "Brown",
  //   address: {
  //     area: {
  //       street: "oxford university road",
  //     },
  //     city: "London",
  //     country: "England",
  //   },
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${val}`
        );
        const result = await response.json();
        setLoading(false);
        setUser(result);
        console.log(result);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [value]);
  const { accountBalance, accountNumber, email } = user;

  let { firstName, lastName, avatar, bvn, gender, phoneNumber, currency } =
    user.profile ?? {};
  const { facebook, twitter, instagram } = user.socials ?? {};
  const {
    level,
    duration,
    emplyomentStatus,
    officeEmail,
    sector,
    loanRepayment,
    monthlyIncome,
  } = user.education ?? {};

  const {
    address,
    firstName: first,
    lastName: last,
    phoneNumber: phone,
    gender: gend,
  } = user.guarantor ?? {};
  // console.log(nam);

  console.log(user);
  console.log(monthlyIncome);

  return (
    <div className="userDetail">
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          <Link to={"/landingpage"}>
            <div className="back">
              <img src={Back} alt="" />
              <p>Back to Users</p>
            </div>
          </Link>
          {/* {userDetail.map((user: any) => { */}
          {/* return (  */}
          <div className="">
            <div className="user">
              <p>User Details</p>
              <div className="buttons">
                <button className="blacklist">BLACKLIST USER</button>
                <button className="activate">ACTIVATE USER</button>
              </div>
            </div>
            <section className="userInfo">
              <div className="top">
                <div className="info">
                  <img
                    // src={Avatar}
                    src={avatar}
                    alt=""
                    className="userimg"
                  />

                  <div className="">
                    <p>
                      {firstName}  <span>{lastName}</span>
                    </p>
                    <p>Lsqkdfjdkfj</p>
                  </div>
                </div>
                <div className="rating">
                  <p>User Tier</p>
                  <div className="">
                    <Box>
                      <Rating
                        name="customized-10"
                        defaultValue={2}
                        max={3}
                        readOnly
                      />
                    </Box>
                  </div>
                </div>

                <div className="bank">
                  <p className="amnt">
                    <span>{currency}</span> {accountBalance}
                  </p>
                  <p> {accountNumber} /Sapa bank</p>
                </div>
              </div>

              <div className={`bottom `}>
                <ul>
                  {information.map(({ id, title }) => {
                    return (
                      <li
                        className={`bottom ${
                          active === id ? "border" : "noBorder"
                        }`}
                        onClick={() => setActive(id)}
                        key={id}
                      >
                        {title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
            <div className="generalInfo">
              {/* Personal information */}
              <section className="personalInfo">
                <h3>Personal Information</h3>
                <div className="personal">
                  <div className="info">
                    <div className="">
                      <p>FULL NAME</p>
                      <p>
                        {firstName}
                        <span>{lastName}</span>
                      </p>
                    </div>
                    <div className="">
                      <p>MARITAL STATUS</p>
                      <p>Single</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>PHONE NUMBER</p>
                      <p> {phoneNumber}</p>
                    </div>
                    <div className="">
                      <p>CHILDREN</p>
                      <p>2</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>EMAIL</p>
                      <p> {email}</p>
                    </div>
                    <div className="">
                      <p>TYPE OF RESIDENCE</p>
                      <p>Estate</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>BVN</p>
                      <p> {bvn}</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>GENDER</p>
                      <p>{gender} </p>
                    </div>
                  </div>
                </div>
              </section>
              {/* Education And Info */}
              <section className="personalInfo">
                <h3>Education and Employment </h3>
                <div className="personal">
                  <div className="info">
                    <div className="">
                      <p>LEVEL OF EDUCATION</p>
                      <p>{level}</p>
                    </div>
                    <div className="">
                      <p>OFFICE EMAIL</p>
                      <p>{officeEmail}</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>EMPLOYMENT STATUS</p>
                      <p> {emplyomentStatus}</p>
                    </div>
                    <div className="">
                      <p>MONTHLY INCOME</p>
                      <p>
                        {/* {monthlyIncome.map((income:any) => {
                          return <span> {income}</span>;
                        })} */}
                        {currency}
                        {monthlyIncome}
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>SECTOR OF EMPLOYMENT</p>
                      <p> {sector}</p>
                    </div>
                    <div className="">
                      <p>LOAN REPAYMENT</p>
                      <p>{loanRepayment}</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>DURATION OF EMPLOYMENT</p>
                      <p> {duration}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Socials */}

              <section className="personalInfo">
                <h3>Socials</h3>
                <div className="personal">
                  <div className="info">
                    <div className="">
                      <p>TWITTER</p>
                      <p>{twitter}</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>FACEBOOK</p>
                      <p>{facebook}</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>INSTAGRAM</p>
                      <p>{instagram}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Guarantor */}

              <section className="personalInfo">
                <h3> Guarantor</h3>
                <div className="personal">
                  <div className="info">
                    <div className="">
                      <p>FULL NAME</p>
                      <p>
                        {first} <span>{last}</span>
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>PHONE NUMBER</p>
                      <p>{phone}</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>EMAIL ADDRESS</p>
                      <p>{address}</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="">
                      <p>RELATIOSHIP</p>
                      <p>{gend === "Male" ? "Brother" : "Sister"}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
