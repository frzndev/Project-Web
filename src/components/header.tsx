import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import { useAuth } from "../contexts";
import logo from "../assets/img/logo.png";
import logout from "../assets/img/logout.png";
import message from "../assets/img/message.png";
import admin from "../assets/img/admin.png";

const Header: React.FC = () => {
  let history = useHistory();
  const { user, AuthLogout } = useAuth();
  const [tipoDeUtilizador, setTipoDeUtilizador] = useState("");
  const [display, setDisplay] = useState(false);

  const exit = () => {
    AuthLogout();
    history.push("/login");
  };

  useEffect(() => {
    if (user?.tipodeutilizador === 0) {
      setTipoDeUtilizador("Estudante");
    }
    if (user?.tipodeutilizador === 1) {
      setTipoDeUtilizador("Professor");
      setDisplay(true);
    }
    if (user?.tipodeutilizador === 2) {
      setTipoDeUtilizador("Administrador");
      setDisplay(true);
    }
  }, []);

  return (
    <header>
      <div className="navbar shadown-sm" style={{ marginLeft: "350px" }}>
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
                <span style={{ color: "#D63578" }}>Bem-Vindo,</span>{" "}
                {user?.nome}
              </h4>
            </div>
            <div className="col-sm">
              <h5 style={{ color: "#FFF" }}>
                <span style={{ color: "#D63578" }}>Numero:</span> {user?.login}{" "}
                <span style={{ color: "#D63578", marginLeft: "2%" }}>
                  Cargo:
                </span>{" "}
                {tipoDeUtilizador}
              </h5>
            </div>
          </div>
          <div style={display ? { display: "flex" } : { display: "none" }}>
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
          </div>
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
              </a>
            </div>
            <div className="navbar shadow-sm">
              <div className="container">
                <img
                  onClick={() => exit()}
                  src={logout}
                  alt="logout"
                  className="img-fluid"
                  height="35"
                  width="35"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
