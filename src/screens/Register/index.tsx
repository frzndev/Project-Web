import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

import LeftSide from "../../components/leftSide";

import arrowBack from "../../assets/img/arrow_back.png";

export const Register = () => {
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
          </div>

          <div className="row">
            <div className="offset-md-3 col-md-4" style={{ marginTop: "10%" }}>
              <form action="">
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputUsername"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Username*
                  </label>
                  <input
                    type="text"
                    id="inputUsername"
                    className="form-control"
                    placeholder="Ex.: aXXXXX"
                    style={{ width: 430, height: 65 }}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputEmail"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Email*
                  </label>
                  <input
                    type="text"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Ex.: aXXXXX@alunos.ipb.pt"
                    style={{ width: 430, height: 65 }}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputPassword"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Password*
                  </label>
                  <input
                    type="text"
                    id="inputPassword"
                    className="form-control"
                    placeholder="*******************"
                    style={{ width: 430, height: 65 }}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputConfPassword"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Confirmar Passowrd*
                  </label>
                  <input
                    type="text"
                    id="inputConfPassword"
                    className="form-control"
                    placeholder="*******************"
                    style={{ width: 430, height: 65 }}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputSchool"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Escola*
                  </label>
                  <select
                    className="form-control"
                    style={{ width: 430, height: 65 }}
                  >
                    <option
                      selected
                      disabled
                      hidden
                      style={{ color: "#696F79" }}
                    >
                      Seleciona a tua Escola
                    </option>
                    <option>ESA</option>
                    <option>ESE</option>
                    <option>ESTIG</option>
                    <option>ESACT</option>
                    <option>ESSA</option>
                  </select>
                </div>
                <div
                  className="form-check"
                  style={{ marginTop: 10, marginLeft: 5 }}
                >
                  <input
                    type="checkbox"
                    id="checkBox"
                    className="form-check-input"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label htmlFor="checkBox" className="form-check-label">
                    Eu aceito os Termos & Condições
                  </label>
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
                  Registar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
