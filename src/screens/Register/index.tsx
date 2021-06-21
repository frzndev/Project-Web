import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import { useAuth } from "../../contexts";
import LeftSide from "../../components/leftSide";

import arrowBack from "../../assets/img/arrow_back.png";

export const Register = () => {
  const { AuthRegister } = useAuth();
  let history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [escola, setEscola] = useState("0");
  const tipodeutilizador = 0;
  const [msgErro, setMsgErro] = useState("");
  const [display, setDisplay] = useState(false);

  async function verifyForm(e: any) {
    e.preventDefault();

    if (
      login === "" ||
      password === "" ||
      Confirmpassword === "" ||
      nome === "" ||
      email === "" ||
      telefone === "" ||
      escola === "0"
    ) {
      setMsgErro("-> Tens de preencher todos os dados pretendidos");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    } else {
      if (password === Confirmpassword) {
        sendForm();
      } else {
        setMsgErro("-> Passwords não coincidem");
        setDisplay(true);
        setTimeout(() => {
          setDisplay(false);
        }, 3000);
      }
    }
  }

  async function sendForm() {
    const session = await AuthRegister({
      login,
      password,
      nome,
      email,
      telefone,
      escola,
      tipodeutilizador,
    });

    if (!session) {
      setMsgErro("-> Já existe uma conta com esse Username ou com esse Email");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    } else {
      history.push("/login");
    }
  }

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
            <div className="offset-md-3 col-md-4" style={{ marginTop: "5%" }}>
              <form onSubmit={(e) => verifyForm(e)}>
                <div className="form-group">
                  <label
                    htmlFor="inputUsername"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Username <span style={{ color: "#ff4d4d" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="inputUsername"
                    className="form-control"
                    placeholder="Ex.: aXXXXX"
                    style={{ width: 430, height: 65 }}
                    onChange={(e) => setLogin(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputNome"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Primeiro e Ultimo Nome
                    <span style={{ color: "#ff4d4d" }}> *</span>
                  </label>
                  <input
                    type="text"
                    id="inputNome"
                    className="form-control"
                    placeholder="Ex.: Nuno Gomes"
                    style={{ width: 430, height: 65 }}
                    onChange={(e) => setNome(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputEmail"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Email <span style={{ color: "#ff4d4d" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Ex.: aXXXXX@alunos.ipb.pt"
                    style={{ width: 430, height: 65 }}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputPassword"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Password <span style={{ color: "#ff4d4d" }}>*</span>
                  </label>
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="*******************"
                    style={{ width: 430, height: 65 }}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputConfPassword"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Confirmar Passowrd
                    <span style={{ color: "#ff4d4d" }}> *</span>
                  </label>
                  <input
                    type="password"
                    id="inputConfPassword"
                    className="form-control"
                    placeholder="*******************"
                    style={{ width: 430, height: 65 }}
                    onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputTelefone"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Telefone <span style={{ color: "#ff4d4d" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="inputTelefone"
                    className="form-control"
                    placeholder="+351 911111111"
                    style={{ width: 430, height: 65 }}
                    onChange={(e) => setTelefone(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputSchool"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Escola <span style={{ color: "#ff4d4d" }}>*</span>
                  </label>
                  <select
                    className="form-control"
                    style={{ width: 430, height: 65 }}
                    value={escola}
                    onChange={(e) => setEscola(e.currentTarget.value)}
                  >
                    <option style={{ color: "#696F79" }} value="0">
                      Seleciona a tua Escola
                    </option>
                    <option value="1">ESA</option>
                    <option value="2">ESE</option>
                    <option value="3">ESTIG</option>
                    <option value="4">ESACT</option>
                    <option value="5">ESSA</option>
                  </select>
                </div>
                <h3
                  className="erroMsg"
                  style={display ? { display: "flex" } : { display: "none" }}
                >
                  {msgErro}
                </h3>
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
