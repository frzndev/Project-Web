import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

import LeftSide from "../../components/leftSide";

import arrowBack from "../../assets/img/arrow_back.png";
import arrowFront from "../../assets/img/arrow_front.png";

export const Login = () => {
  return (
    <div className="row no-gutters">
      <LeftSide />

      <div className="col">
        <div className="right-side">
          <div className="row">
            <div className="col-sm" style={{ marginTop: "2%" }}>
              <Link to="/" style={{ color: "#D63578" }}>
                <img
                  src={arrowBack}
                  alt="arrowBack"
                  height="17"
                  width="10"
                  style={{ marginRight: "2%", marginLeft: "5%" }}
                />
                Voltar
              </Link>
            </div>
            <div
              className="col-sm"
              style={{ marginTop: "2%", marginLeft: "35%" }}
            >
              Ainda não tens conta ?
              <Link to="/register" style={{ color: "#D63578" }}>
                {" "}
                Regista-te
                <img
                  src={arrowFront}
                  alt="arrowFront"
                  height="17"
                  width="10"
                  style={{ marginLeft: "2%" }}
                />
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="offset-md-3 col-md-4" style={{ marginTop: "25%" }}>
              <form action="/login">
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputEmail"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Ex.: aXXXXX"
                    style={{ width: 430, height: 65 }}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputPassword"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="*******************"
                    style={{ width: 430, height: 65 }}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <Link
                    to="/rec-password"
                    style={{ color: "#D63578", marginLeft: 5 }}
                  >
                    Esqueci-me da Password
                  </Link>
                </div>
                <Link to="/menu">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      marginTop: 10,
                      backgroundColor: "#D63578",
                      border: 0,
                      width: 430,
                      height: 65,
                    }}
                  >
                    Entrar
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
