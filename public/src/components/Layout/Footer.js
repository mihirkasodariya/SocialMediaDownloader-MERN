import styles from "./Footer.module.css";
import gitLogo from "../../assets/icons8-github-logo-48.png";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <a href="https://github.com/mihirkasodariya">
        <img src={gitLogo} alt="github"></img>
        <span>Mihir Kasodariya</span>
      </a>
    </footer>
  );
};

export default Footer;
