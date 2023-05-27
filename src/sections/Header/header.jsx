import Headerimage from "../../images/Amaka2.jpg";
import data from "./data";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={Headerimage} alt="Header Portrait" />
        </div>
        <h3>Amaka Metu</h3>
        <p>
          Hi, I'm Amaka. You are a click away from building your dream website
          or web app. send me the details of your project for a modern, mobile
          responsive, high performance website today!
        </p>
        <div className="header__cta">
          <a href="#contact"> Let's Talk</a>
          <a href="#projects">My Work</a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
          
        </div>
      </div>
    </header>
  );
};


export default Header;
