import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

import LeftSide from "../../components/leftSide";
import rectangle from "../../assets/img/rectangle.png";
import arrow from "../../assets/img/arrow-right.png";

export const Home = () => {
  return (
    <div className="row no-gutters">
      <LeftSide />

      {/* RIGHT-SIDE */}
      <div className="col text-center">
        <div className="right-side">
          <div className="index-right-side">
            <div className="col">
              <h1>Já tens cá conta ?</h1>
              <h4>
                Se ainda não tens conta regista-te e usa os
                <br />
                mesmos dados da tua matricula na escola.
              </h4>
            </div>
            <div className="col text-center">
              <Link
                to="/login"
                className="highlight-button btn btn-large button xs-margin-bottom-five"
                data-abc="true"
              >
                <img
                  src={rectangle}
                  alt="rectangle"
                  width="52"
                  height="52"
                  style={{ marginRight: 60 }}
                />
                Já tenho conta
                <img
                  src={arrow}
                  alt="arrow"
                  width="20"
                  height="20"
                  style={{ marginLeft: 50 }}
                />
              </Link>
            </div>
            <div className="col text-center">
              <Link
                to="/register"
                className="highlight-button btn btn-large button xs-margin-bottom-five"
                data-abc="true"
              >
                <img
                  src={rectangle}
                  alt="rectangle"
                  width="52"
                  height="52"
                  style={{ marginRight: 20 }}
                />
                Quero-me registar
                <img
                  src={arrow}
                  alt="arrow"
                  width="20"
                  height="20"
                  style={{ marginLeft: 50 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
