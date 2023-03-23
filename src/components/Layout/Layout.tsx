import React, { useState } from "react";
import { Header } from "../Header/Header";
import { SideBar } from "../SideBar/SideBar";
import "./Layout.scss";
type Props = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [nav, setNav] = useState(false);
  return (
    <div className="layout" 
    style={nav ? { backgroundColor: "black" } : {}}
    >
      <div className=""
       style={nav ? { opacity: "0.5" } : {}}
       >
        <Header nav={nav} setNav={setNav} />
      </div>
      <div className="children">
        <div className="side">

        <SideBar nav={nav} setNav={setNav}/>
        </div>
        <div className=""
         style={nav ? { backgroundColor: "black",  } : {width:"100%", background:"#e5e5e5"}}
         > 
          <div className="child" 
          style={nav ? { opacity: "0.5" } : {}}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
