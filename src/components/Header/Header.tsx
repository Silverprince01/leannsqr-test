import useWindowSize from "../../hook/useWindowSize";
import { Logo, Search, Notification, UserImg, Drop } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faNavicon,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

type Props = {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Header = ({ nav, setNav }: Props) => {
  const { width } = useWindowSize();
  return (
    <div className="header">
      <div className="heads">
        <div className="left">
          {width > 1156 ? (
            <img src={Logo} alt="" className="logo" />
          ) : (
            <FontAwesomeIcon
              icon={nav ? faTimes : faNavicon}
              size="lg"
              onClick={() => {
                setNav((prev) => !prev);
              }}
            />
          )}

          <div className="searchBar">
            <input type="text" placeholder="Search for anything" />
            <div className="search">
              <img src={Search} alt="search" />
            </div>
          </div>
        </div>

        <div className="right">
          <div></div>
          <div className="userRight">
            <div className="users">
              <p className="docs">Docs</p>
              <div className="notifcation">
                <img src={Notification} alt="notification" />
              </div>
              <div className="user">
                <img src={UserImg} alt="userimg" className="userImg" />
                <p>
                  Adedeji <img src={Drop} alt="" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
