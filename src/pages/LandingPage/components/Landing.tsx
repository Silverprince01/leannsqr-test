import { useState, useEffect, useContext } from "react";
import Loader from "../../../components/Loader";
import { Users } from "../../../components/Users/Users";
import { UserLists } from "../../../components/UsersList/UserLists";
import { ValueContext } from "../../../components/context";
import "./Landing.scss";
export const Landing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name,email,organisation,phone } = useContext(ValueContext);
  
  const [org] = organisation;
  const [nam] = name;
  const [mail ] = email;
  const [phon] = phone;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
        );
        const result = await response.json();
        setLoading(false);
        console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const userData = data.filter((dat: any) => {
    return (
      dat.userName.toString().toLowerCase().includes(nam.toLowerCase()) &&
      dat.orgName.toLowerCase().includes(org.toLowerCase()) &&
      dat.email.toLowerCase().includes(mail.toLowerCase()) &&
      dat.phoneNumber.toLowerCase().includes(phon.toLowerCase())
    );
  });
  return (
    <div className="landing">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Users userData={userData} />
          <UserLists userData={userData} />
        </div>
      )}
    </div>
  );
};
