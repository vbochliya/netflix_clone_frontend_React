import styles from "./Button.module.css";
function Button(props) {
    let type;
    if(props.type==="act")type=styles.act;
    else type=styles.dac;
  return (
    <div className={styles.BaseCont}>
      <button className={`${styles.Base} ${type}`} onClick={()=>{props.ClickOn&&props.ClickOn(); props.clicked && props.clicked();}}>{props.name}</button>
    </div>
  );
}
export default Button;
