import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

import logo from "../assets/img/logo.png";
import ipb from "../assets/img/ipb.png";

const LeftSide: React.FC = () => {
  return (
    <div className="col">
      {/* LEFT-SIDE */}
      <div className="left-side">
        <div className="col text-center">
          <img src={logo} alt="logo" height="250" width="250" />
        </div>

        <div className="col text-center">
          <h4>
            Candidata-te já a receber um
            <br />
            Computador para as tuas aulas online
          </h4>
        </div>

        <div className="col text-center">
          <img src={ipb} alt="ipb" />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
