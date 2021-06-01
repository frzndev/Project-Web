import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

import LeftSide from "../../components/leftSide";

import arrowBack from "../../assets/img/arrow_back.png";
import arrowFront from "../../assets/img/arrow_front.png";

export const RecPassword = () => {
  return (
    <div className="row no-gutters">
      <LeftSide />

      <div className="col">
        <div className="right-side">
          <div className="row">
            <div className="col-sm" style={{ marginTop: "2%" }}>
              <Link to="/login" style={{ color: "#D63578" }}>
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
            <div className="offset-md-3 col-md-4" style={{ marginTop: "30%" }}>
              <form action="">
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputEmail"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Ex.: aXXXXX@alunos.ipb.pt"
                    style={{ width: 430, height: 65 }}
                  />
                </div>
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
                  Pedir nova Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
