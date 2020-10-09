import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import MyContext from "../../MyContext";

function Index() {
  let context = useContext(MyContext);
  return (
    <header className="header__section">
      <div className="header__section--content">
        <Link to="/">
          <img src={require("./../../images/logo.svg")} alt="logo" />
        </Link>
        <ul className="main-menu">
          <li>
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/cfdteam">CFD Team</NavLink>
          </li>
          <li>
            <NavLink to="/khoahoc">Khóa Học</NavLink>
          </li>
          <li>
            <NavLink to="/duan">Dự án</NavLink>
          </li>
          <li>
            <NavLink to="/lienhe">Liên hệ</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
        <div className="header__section--information">
          <span>Võ Ngọc Phi Hùng</span>
          <img
            src={require("./../../images/avt.png")}
            alt=""
            className="avatar"
          />
          <img src={require("./../../images/humbeger.png")} alt="" />
        </div>
      </div>
      {/* <ul>
        <li>Khóa học của tôi</li>
        <li>Thông tin tài khoản</li>
        <li>Đăng xuất</li>
      </ul> */}
    </header>
  );
}

export default Index;
