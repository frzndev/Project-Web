import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

import logo from "../assets/img/logo.png";
import logout from "../assets/img/logout.png";
import message from "../assets/img/message.png";
import box from "../assets/img/box.png";
import admin from "../assets/img/admin.png";

import avatar1 from "../assets/img/avatar1.png";
import avatar2 from "../assets/img/avatar2.png";
import avatar3 from "../assets/img/avatar3.png";

const Header: React.FC = () => {
  return (
    <header>
      <div className="navbar shadown-sm">
        <div className="container">
          <a href="#">
            <img
              src={logo}
              alt="logo"
              className="img-fluid"
              height="150"
              width="150"
            />
          </a>
          <div className="col text-center">
            <div className="col-sm">
              <h4 style={{ color: "#FFF" }}>
                <span style={{ color: "#D63578" }}>Bem-Vindo,</span> Nuno Gomes
              </h4>
            </div>
            <div className="col-sm" style={{ marginRight: 500 }}>
              <h5 style={{ color: "#FFF" }}>
                <span style={{ color: "#D63578" }}>Numero:</span> a38368{" "}
                <span style={{ color: "#D63578", marginLeft: "2%" }}>
                  Cargo:
                </span>{" "}
                Estudante
              </h5>
            </div>
          </div>
          <Link
            to="/menuadmin"
            className="text-center"
            style={{ color: "#fff" }}
          >
            <img
              src={admin}
              alt="admin"
              className="img-fluid"
              height="80"
              width="87"
            />
            <h6>Painel</h6>
            <h6>Administração</h6>
          </Link>
          <div className="col" style={{ color: "#FFF" }}>
            <div className="col-sm">
              <a href="#">
                <button
                  type="button"
                  className="btn btn-gray-dark"
                  data-toggle="modal"
                >
                  <img
                    src={message}
                    className="img-fluid"
                    alt="msg"
                    height="35"
                    width="35"
                  />
                </button>
                <div className="modal fade" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <img src={box} alt="box" />
                        <h5 className="modal-title">Nova Mensagem</h5>
                        <span aria-hidden="true">&times;</span>
                      </div>
                      <div className="modal-body">
                        <img
                          src={avatar1}
                          alt="avatar1"
                          className="img-fluid"
                          height="35"
                          width="35"
                        />
                        <p>ADMIN - Roberto</p>
                      </div>
                      <div className="modal-body">
                        <img
                          src={avatar2}
                          alt="avatar2"
                          className="img-fluid"
                          height="35"
                          width="35"
                        />
                        <p>FUNCIONARIO - Andreia</p>
                      </div>
                      <div className="modal-body">
                        <img
                          src={avatar3}
                          alt="avatar3"
                          className="img-fluid"
                          height="35"
                          width="35"
                        />
                        <p>PROF - Luis</p>
                      </div>
                      <div className="modal-body">
                        <img
                          src={avatar1}
                          alt="avatar1"
                          className="img-fluid"
                          height="35"
                          width="35"
                        />
                        <p>ADMIN - Keivin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="navbar shadow-sm">
              <div className="container">
                <Link to="/login">
                  <img
                    src={logout}
                    alt="logout"
                    className="img-fluid"
                    height="35"
                    width="35"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
