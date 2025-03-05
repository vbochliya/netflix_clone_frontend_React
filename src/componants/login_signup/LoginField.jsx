import styles from "./LoginField.module.css";
function LoginField(props) {
    // const ide="in";
    let hchange=(e)=>{props.change(e.target.value)}
  return (
    <div className={styles.Field}>
        {/* <label htmlFor={ide}>{props.place}</label> */}
      <input type={props.type} placeholder={props.place}  onChange={hchange} />
        {/* use event listener */}
    </div>
  );
}
export default LoginField;
