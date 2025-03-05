import styles from "./LoginBox.module.css";
import LoginField from "./LoginField";
import Button from "./Button";
import { useState } from "react";
import { SignUp } from "./../../server/auth";
// import LoginBox from "./LoginBox";
import Message from "./Message";
function SignupBox({ changeType }) {
  let [user_name, setUserName] = useState("");
  let [Email, setEmail] = useState("");
  let [password, setPass] = useState("");

  let [ErrorMessage, setErrorMessage] = useState("");
  let [successMessage, setSuccessMessage] = useState("");

  let HandleClick = () => {
    let res = SignUp(user_name, Email, password);
    if (res.error) setErrorMessage(res.error);
    if (res.message) {
      console.log(res.message);
      setSuccessMessage(res.message);
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    }
  };


  return (
    
   
    <div className={styles.Lb}>
    <div style={{height:"6%",width:"100%",marginTop:"0px"}}><Message ErrorMessage={ErrorMessage} successMessage={successMessage}></Message>
    </div>
      <p>Sign up</p>
      <LoginField
        place={"User Name"}
        type={"text"}
        change={setUserName}
      ></LoginField>
      <LoginField
        place={"Email or mobile number"}
        type={"text"}
        change={setEmail}
      ></LoginField>
      <LoginField
        place={"Password"}
        type={"password"}
        change={setPass}
      ></LoginField>
      
      <Button name={"Sign Up"} type={"act"} clicked={HandleClick}></Button>

      <span
        style={{
          // marginTop: "17px",
          justifyContent: "start",
          paddingLeft: "15%",
          marginTop: "0%",
        }}
      >
        Already have an account ?{" "}
        <a
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => {
            window.location.href = "login";
          }}
        >
           Sign In
        </a>
      </span>
      {/* <span className={styles.check}><input type="checkbox" className={styles.chbox} defaultChecked/><span>Remember me</span></span> */}
      {/* <span style={{marginTop:"17px", justifyContent:"start",paddingLeft:"15%" ,marginTop:"0%"}}>New to Netflix? <a href="./../../signup.html" style={{color:"white"}}>Sign up now.</a></span> */}
      {/* <p style={{fontSize:"14px", fontWeight:"400",paddingRight:"15%"}}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="" style={{color:"rgba(73, 73, 247, 0.95)"}}>Learn more.</a></p> */}
    </div>
    
  );
}
export default SignupBox;
