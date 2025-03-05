import styles from "./Footer.module.css";
function Footer() {
  return (
   <div className={styles.Ft}>
    <div className={styles.ph}><span>Question? Call <a href="tel:000-800-919-1743">000-800-919-1743</a></span>
    </div>
   <div className={styles.Fte}>
    <span className={styles.Ftec}><a href="">FAQ</a></span>
    <span className={styles.Ftec}><a href="">Help Center</a></span>
    <span className={styles.Ftec}><a href="">Terms of Use</a></span>
    <span className={styles.Ftec}><a href="">Privacy</a></span>
    <span className={styles.Ftec}><a href="">Cookie Preferences</a></span>
    <span className={styles.Ftec}><a href="">Corporate Informatoin</a></span>
   </div>
   </div>
  );
}
export default Footer;
