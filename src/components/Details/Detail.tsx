import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { View, DeleteUser, User } from "../../assets";
import "./Details.scss";
import { ValueContext } from "../context";

export const Detail = () => {
  const {value} = useContext(ValueContext)
  return (
    <div className="details">
      <div className="detail">
        <div className="det">
          <Link to={`/userdetail/user/`}>
            <img src={View} alt="" />
            <p>View Details</p>
          </Link>
        </div>
        <div className="det">
          <img src={DeleteUser} alt="" />
          <p>Blacklist User</p>
        </div>
        <div className="det">
          <img src={User} alt="" />
          <p>Activate User</p>
        </div>
      </div>
    </div>
  );
};
