import React from "react";
import styles from "./Auth.module.css";
import LoginBox from "../componants/login_signup/LoginBox";
import SignupBox from "../componants/login_signup/SignupBox";
import logo from "./../../public/logo.svg";
import { Routes, Route } from "react-router-dom";

function AuthContainer() {
  return (
    <div className={styles.BgBox}>
      <div className={styles.Bgp}>
        <span>
          <img src={logo} alt="Logo" />
        </span>
      </div>
      <div className={styles.Bgi}></div>
      {/* Nested routes under /auth */}
      <Routes>
        <Route path="login" element={<LoginBox />} />
        <Route path="signup" element={<SignupBox />} />
        {/* Fallback to login if no specific route is matched */}
        {/* <Route path="forget-password" element={<ForgetPassword />} /> //another route for forget password to be added */}
        <Route path="*" element={<LoginBox />} />
      </Routes>
    </div>
  );
}

export default AuthContainer;
