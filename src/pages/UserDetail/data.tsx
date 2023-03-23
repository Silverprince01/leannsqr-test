import { useState } from "react";


type Prop = {
    id:number
}
const [user, setUser] = useState({})
//   useEffect(() => {
    console.log("effct");

   export const fetchData = async ({id}:Prop) => {
      const response = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users${id}`
      );
      const result = await response.json();
      console.log(result);
      setUser(result);
      // setTotalPages(totalPages);
    };

    // fetchData(id);
//   }, []);