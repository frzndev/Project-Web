import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

import ipb from "../assets/img/ipb.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container d-flex justify-content-center">
        <img src={ipb} alt="ipb" />
      </div>
    </footer>
  );
};

export default Footer;
