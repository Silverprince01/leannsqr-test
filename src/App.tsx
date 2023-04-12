import { useState, } from "react";
import { Routes, Route } from "react-router-dom";
import { SigninPage } from "./pages/Signin/Signin";
import { LandingPage } from "./pages/LandingPage";
import { UserDetail } from "./pages/UserDetail";
import { ValueContext } from "./components/context";


import "./App.scss";

function App() {
  type ValueContextType = {
    value: number;
    setValue: (value: number) => void;
    nam: string | "";
    setNam: (val: string) => void;
    mail: string | "";
    setMail: (val: string) => void;
    phone: string | "";
    setPhone: (val: string) => void;
    org: string | "";
    setOrg: (val: string) => void;
  };
  const [valu, setValue] = useState<ValueContextType | any>(1);
  const [nam, setNam] = useState<ValueContextType | any>("");
  const [mail, setMail] = useState<ValueContextType | any>("");
  const [org, setOrg] = useState<ValueContextType | any>("");
  const [phon, setPhone] = useState<ValueContextType | any>("");
  return (
    <div className="App">
      <ValueContext.Provider
        value={{
          value: [valu, setValue],
          name: [nam, setNam],
          email: [mail, setMail],
          organisation: [org, setOrg],
          phone: [phon, setPhone],
        }}
      >
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path={`/userdetail/user`} element={<UserDetail />} />
        </Routes>
      </ValueContext.Provider>
    </div>
  );
}

export default App;
