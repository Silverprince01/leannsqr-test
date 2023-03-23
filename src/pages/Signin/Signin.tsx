import { Link } from "react-router-dom";
import { Signin, Logo } from "../../assets/index";
import "./Signin.scss";
export const SigninPage = () => {
  return (
    <div className="signin">
      <div className="intro">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="pablo">
          <img src={Signin} alt="" />
        </div>
      </div>
      <div className="login">
        <h3>Welcome!</h3>
        <p className="enter">Enter details to login.</p>
        <form action="">
          <input type="text" placeholder="Email" />
          <div className="password">

          <input type="password" name="" id="" placeholder="Password" />
          <span>SHOW</span>
          </div>
          <p className="forgot">FORGOT PASSWORD?</p>
          <div className="btn">
            <Link to="/landingpage">
            <button> LOG IN</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
