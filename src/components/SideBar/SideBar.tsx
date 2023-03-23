import { useState } from "react";
import { Logo } from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import {  useLocation } from "react-router-dom";
import useWindowSize from "../../hook/useWindowSize";

import {
  Audit,
  Badge,
  BriefCase,
  ChartBar,
  CoinSolid,
  Collect,
  Galaxy,
  HandShake,
  Home,
  NPBank,
  Piggy,
  Sack,
  Scroll,
  Slider,
  Transaction,
  Users,
  UserCheck,
  UserCog,
  UserTimes,
  UserFriends,
  ArrowDown,
} from "../../assets";
import "./SideBar.scss";
type Props = {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SideBar = ({ nav, setNav }: Props) => {
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const customer: { id: number; icon: any; title: string }[] = [
    { id: 0, icon: UserFriends, title: "Users" },
    { id: 1, icon: Users, title: "Guarantors" },
    { id: 2, icon: Sack, title: "Loans" },
    { id: 3, icon: HandShake, title: "Decision Models" },
    { id: 4, icon: Piggy, title: "Savings" },
    { id: 5, icon: Collect, title: "Loan Request" },
    { id: 6, icon: UserCheck, title: "Whitelist" },
    { id: 7, icon: UserTimes, title: "Karma" },
  ];
  const business: { id: number; icon: any; title: string }[] = [
    { id: 0, icon: BriefCase, title: "Organisations" },
    { id: 1, icon: Collect, title: "Loans Product" },
    { id: 2, icon: NPBank, title: "Saving Product" },
    { id: 3, icon: CoinSolid, title: "Fees and Charges" },
    { id: 4, icon: Transaction, title: "Transactions" },
    { id: 5, icon: Galaxy, title: "Service" },
    { id: 6, icon: UserCog, title: "Service Account" },
    { id: 7, icon: Scroll, title: "Settlements" },
    { id: 8, icon: ChartBar, title: "Reports" },
  ];
  const settings: { id: number; icon: any; title: string }[] = [
    { id: 0, icon: Slider, title: "Preferences" },
    { id: 1, icon: Badge, title: "Fees and Pricing" },
    { id: 2, icon: Audit, title: "Audit Logs" },
  ];

  return (
    <div
      // ${nav ? "mobile" : ""}
      style={
        nav
          ? {
              left: "0",
              width: width < 651 ? "70%" : "40%",
              position: "absolute",
              top: "0",
              zIndex: "1000",
            }
          : {
              position: width > 1156 ? "relative" : "absolute",
              left: width > 1156 ? "0" : "-100%",
            }
      }
      className={`sideBar `}
    >
      <div className="">
        {width < 1156 ? (
          <div className="logo">
            <img src={Logo} alt="" />
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              onClick={() => setNav((prev) => !prev)}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="head">
        <img src={BriefCase} alt="briefcase" />
        <p> Switch Organisation</p>
        <img src={ArrowDown} alt="arrowdown" />
      </div>
      <div className="dashBoard">
        <img src={Home} alt="" />
        <p>DashBoard</p>
      </div>

      <div className="customers">
        <h3>Customer</h3>
        {customer.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`customer ${
                active === tab.id ? "border" : "noBorder"
              }`}
            >
              <div onClick={() => setActive(tab.id)} className="options">
                <img src={tab.icon} alt="" />
                <p>{tab.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="business">
        <h3>Business</h3>
        {business.map(({ id, icon, title }) => {
          return (
            <div key={id} className="busines">
              <div className="options">
                <img src={icon} alt="" />
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="settings">
        <h3>Settings</h3>
        {settings.map(({ id, icon, title }) => {
          return (
            <div key={id} className="setting">
              <div className="options">
                <img src={icon} alt="" />
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
