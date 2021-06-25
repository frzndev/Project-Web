import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import refresh from "../../assets/img/refresh.png";
import Header from "../../components/header";
import Footer from "../../components/footer";
import {
  sendEquipamento,
  getAllEquipamentos,
  removeEquipamento,
  getUtilizadores,
  getUtilizador,
  removeUtilizador,
} from "../../services/auth";

export const MenuAdmin = () => {
  const [msgErro, setMsgErro] = useState("");
  const [display, setDisplay] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);

  const [tipoDeUtilizador, setTipoDeUtilizador] = useState(0);
  const [users, setUsers] = useState([]);
  const [idUser, setIdUser] = useState("");

  const [editUser, setEditUser] = useState([]);
  let res = Object.values(editUser);

  const [equipamentos, setEquipamentos] = useState([]);
  const [idEquipamento, setIdEquipamento] = useState("");

  const [tipoDeEquipamento, setTipoDeEquipamento] = useState(1);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const estado = 1;

  const [userCheckBox1, setUserCheckBox1] = useState(false);
  const [userCheckBox2, setUserCheckBox2] = useState(false);
  const [userCheckBox3, setUserCheckBox3] = useState(false);

  const [equipammentCheckBox1, setEquipammentCheckBox1] = useState(false);
  const [equipammentCheckBox2, setEquipammentCheckBox2] = useState(false);

  useEffect(() => {
    getEquipamments();
  }, []);

  // GERIR UTILIZADOR
  const handleUserChangeOne = () => {
    setUserCheckBox1(true);
    setUserCheckBox2(false);
    setUserCheckBox3(false);
    setTipoDeUtilizador(0);
    getUsers();
  };

  const handleUserChangeTwo = () => {
    setUserCheckBox1(false);
    setUserCheckBox2(true);
    setUserCheckBox3(false);
    setTipoDeUtilizador(1);
    getUsers();
  };

  const handleUserChangeThree = () => {
    setUserCheckBox1(false);
    setUserCheckBox2(false);
    setUserCheckBox3(true);
    setTipoDeUtilizador(2);
    getUsers();
  };

  const verifyFormUser = (e: any) => {
    e.preventDefault();

    if (idUser === "") {
      setMsgErro("-> Tens de selecionar o Utilizador a gerir !");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    } else {
      sendUser();
    }
  };

  const sendUser = async () => {
    setEditUser(
      await getUtilizador({
        idUser,
      })
    );
  };

  const getUsers = async () => {
    setUsers(
      await getUtilizadores({
        tipoDeUtilizador,
      })
    );
  };

  const showPassword = (e: any) => {
    e.preventDefault();
    setDisplayPassword(!displayPassword);
  };

  const sendFormRemoveUser = async (e: any) => {
    e.preventDefault();

    const send = await removeUtilizador({
      idUser,
    }).catch(function (error) {
      console.log(error);
      setMsgErro("-> Impossível remover este Utilizador !");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    });

    if (send) {
      setMsgErro("-> Utilizador Removido com Sucesso !");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }
  };

  // GERIR EQUIPAMENTO
  const handleEquipammentChangeOne = () => {
    setEquipammentCheckBox1(true);
    setEquipammentCheckBox2(false);
    setTipoDeEquipamento(1);
  };

  const handleEquipammentChangeTwo = () => {
    setEquipammentCheckBox1(false);
    setEquipammentCheckBox2(true);
    setTipoDeEquipamento(2);
  };

  const verifyFormRegistarEquipamento = (e: any) => {
    e.preventDefault();

    if (marca === "" || modelo === "") {
      setMsgErro(
        "-> Tens de preencher todos os dados para poderes registar o equipamento !"
      );
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }

    sendFormRegistarEquipamento();
  };

  async function sendFormRegistarEquipamento() {
    const send = await sendEquipamento({
      tipoDeEquipamento,
      marca,
      modelo,
      estado,
    });

    if (send) {
      setMsgErro("-> Equipamento Registado com Sucesso !");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }
  }

  // REMOVER EQUIPAMENTO
  const getEquipamments = async () => {
    setEquipamentos(await getAllEquipamentos());
  };

  const verifyFormDeleteEquipamento = (e: any) => {
    e.preventDefault();

    if (idEquipamento === "") {
      setMsgErro("-> Tens de selecionar o equipamento para o removeres !");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }

    sendFormDeleteEquipamento();
  };

  async function sendFormDeleteEquipamento() {
    const send = await removeEquipamento({
      idEquipamento,
    });

    if (send) {
      setMsgErro("-> Equipamento Removido com Sucesso !");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }
  }

  return (
    <>
      <Header />

      <div
        className="row d-flex justify-content-center"
        style={{ color: "#696F79", marginTop: "3%" }}
      >
        <h3
          className="erroMsg"
          style={display ? { display: "flex" } : { display: "none" }}
        >
          {msgErro}
        </h3>
        <aside className="col-sm-2">
          <div className="card" style={{ border: 0, backgroundColor: "#fff" }}>
            <article className="card-body">
              <div
                style={{
                  width: 300,
                  height: 65,
                  border: "2px solid #D63578",
                  backgroundColor: "#f6d5e3",
                  marginBottom: 15,
                }}
              >
                <h4
                  className="card-title text-center"
                  style={{ color: "#D63578", marginTop: 15 }}
                >
                  Gerir Contas
                </h4>
              </div>
              <form onSubmit={(e) => verifyFormUser(e)}>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#fff" }}
                    onChange={handleUserChangeOne}
                    checked={userCheckBox1}
                  />
                  <label className="form-check-label">Estudante</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#fff" }}
                    onChange={handleUserChangeTwo}
                    checked={userCheckBox2}
                  />
                  <label className="form-check-label">Professor</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#fff" }}
                    onChange={handleUserChangeThree}
                    checked={userCheckBox3}
                  />
                  <label className="form-check-label">Administrador</label>
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <select
                    className="form-control"
                    style={{ borderColor: "#D63578", width: 300, height: 50 }}
                    onChange={(e) => setIdUser(e.target.value)}
                  >
                    <option selected hidden style={{ color: "#696F79" }}>
                      Seleciona a conta pretendida
                    </option>
                    {users &&
                      users.length > 0 &&
                      users.map((data) => {
                        {
                          if (data["tipodeutilizador"] === 0) {
                            return (
                              <option
                                style={{ color: "#000" }}
                                value={data["id"]}
                                key={data["id"]}
                                onClick={() => setIdUser(data["id"])}
                              >
                                Estudante - {data["login"]} - {data["nome"]}
                              </option>
                            );
                          } else if (data["tipodeutilizador"] === 1) {
                            return (
                              <option
                                style={{ color: "#23C263" }}
                                value={data["id"]}
                                key={data["id"]}
                                onClick={() => setIdUser(data["id"])}
                              >
                                Professor - {data["login"]} - {data["nome"]}
                              </option>
                            );
                          } else if (data["tipodeutilizador"] === 2) {
                            return (
                              <option
                                style={{ color: "#FF0000" }}
                                value={data["id"]}
                                key={data["id"]}
                                onClick={() => setIdUser(data["id"])}
                              >
                                Administrador - {data["login"]} - {data["nome"]}
                              </option>
                            );
                          }
                        }
                      })}
                  </select>
                  <button
                    type="submit"
                    className="btn btn-primary text-center"
                    style={{
                      marginTop: 10,
                      backgroundColor: "#D63578",
                      border: 0,
                      width: 220,
                      height: 65,
                    }}
                  >
                    Selecionar Conta
                  </button>
                </div>
              </form>
              <form onSubmit={(e) => sendFormRemoveUser(e)}>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label style={{ marginBottom: 5, marginLeft: 5 }}>
                    Informações sobre a conta "{res[1]}":
                  </label>
                  <p
                    className="form-control"
                    style={{
                      width: 300,
                      height: 140,
                      borderColor: "#D63578",
                      fontSize: 14,
                    }}
                  >
                    <span style={{ color: "#D63578" }}>Username: </span>
                    {res[1]}
                    <br></br>
                    <span style={{ color: "#D63578" }}>Password: </span>
                    {displayPassword ? res[2] : "********"}
                    <button
                      style={{
                        color: "#FF0000",
                        border: 0,
                        background: "#fff",
                      }}
                      onClick={(e) => showPassword(e)}
                    >
                      {" "}
                      Ver
                    </button>
                    <br></br>
                    <span style={{ color: "#D63578" }}>Nome: </span>
                    {res[3]}
                    <br></br>
                    <span style={{ color: "#D63578" }}>Email: </span>
                    {res[4]}
                    <br></br>
                    <span style={{ color: "#D63578" }}>Telefone: </span>
                    {res[5]}
                    <br></br>
                    <span style={{ color: "#D63578" }}>Escola: </span>
                    {res[6] === 1 && "ESE"}
                    {res[6] === 2 && "ESE"}
                    {res[6] === 3 && "ESTIG"}
                    {res[6] === 4 && "ESACT"}
                    {res[6] === 5 && "ESSA"}
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary text-center"
                  style={{
                    backgroundColor: "#D63578",
                    border: 0,
                    width: 220,
                    height: 65,
                  }}
                >
                  Remover Conta
                </button>
              </form>
            </article>
          </div>
        </aside>
        <aside className="col-sm-2">
          <div className="card" style={{ border: 0, backgroundColor: "#FFF" }}>
            <article className="card-body">
              <div
                style={{
                  width: 300,
                  height: 65,
                  border: "2px solid #D63578",
                  backgroundColor: "#F6D5E3",
                  marginBottom: 15,
                }}
              >
                <h4
                  className="card-title text-center"
                  style={{ color: "#D63578", marginTop: 15 }}
                >
                  Gerir Requisições
                </h4>
              </div>
              <form>
                <label>Listar todas as requisições:</label>
                <a href="#" style={{ marginLeft: "5%" }}>
                  <img
                    src={refresh}
                    alt="refresh"
                    className="img-fluid"
                    height="24"
                    width="24"
                  />
                </a>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label className="form-check-label">
                    a38368 - Nuno Gomes
                  </label>
                  <span
                    style={{
                      color: "#23C263",
                      marginLeft: "5%",
                      fontWeight: "bold",
                    }}
                  >
                    Aceite
                  </span>
                </div>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label className="form-check-label">
                    a41820 - Mussa Djamba
                  </label>
                  <span
                    style={{
                      color: "#C7CA23",
                      marginLeft: "5%",
                      fontWeight: "bold",
                    }}
                  >
                    Em Espera
                  </span>
                </div>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label className="form-check-label">
                    a39673 - Elmer Gama
                  </label>
                  <span
                    style={{
                      color: "#FF0000",
                      fontWeight: "bold",
                    }}
                  >
                    Rejeitado
                  </span>
                </div>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label className="form-check-label">
                    a38368 - Nuno Gomes
                  </label>
                  <span
                    style={{
                      color: "#23C263",
                      marginLeft: "5%",
                      fontWeight: "bold",
                    }}
                  >
                    Aceite
                  </span>
                </div>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label className="form-check-label">
                    a38368 - Nuno Gomes
                  </label>
                  <span
                    style={{
                      color: "#C7CA23",
                      marginLeft: "5%",
                      fontWeight: "bold",
                    }}
                  >
                    Em Espera
                  </span>
                </div>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label className="form-check-label">
                    a38368 - Nuno Gomes
                  </label>
                  <span
                    style={{
                      color: "#C7CA23",
                      marginLeft: "5%",
                      fontWeight: "bold",
                    }}
                  >
                    Em Espera
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary text-center"
                  style={{
                    backgroundColor: "#D63578",
                    border: 0,
                    width: 220,
                    height: 65,
                  }}
                >
                  Alterar Requisição
                </button>
              </form>
            </article>
          </div>
        </aside>
        <aside className="col-sm-2">
          <div className="card" style={{ border: 0, backgroundColor: "#fff" }}>
            <article className="card-body">
              <div
                style={{
                  width: 300,
                  height: 65,
                  border: "2px solid #D63578",
                  backgroundColor: "#F6D5E3",
                  marginBottom: 15,
                }}
              >
                <h4
                  className="card-title text-center"
                  style={{ color: "#D63578", marginTop: 15 }}
                >
                  Gerir Devoluções
                </h4>
              </div>
              <form>
                <label>Listar todas as devoluções:</label>
                <a href="#" style={{ marginLeft: "5%" }}>
                  <img
                    src={refresh}
                    alt="refresh"
                    className="img-fluid"
                    height="24"
                    width="24"
                  />
                </a>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#fff" }}
                  />
                  <label className="form-check-label">
                    a38368 - Nuno Gomes
                  </label>
                  <a href="#">
                    <span
                      style={{
                        color: "#D63578",
                        marginLeft: "3%",
                        fontWeight: "bold",
                      }}
                    >
                      Enviar Mensagem
                    </span>
                  </a>
                </div>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#fff" }}
                  />
                  <label className="form-check-label">
                    a41820 - Mussa Djamba
                  </label>
                  <a href="#">
                    <span
                      style={{
                        color: "#D63578",
                        marginLeft: "1%",
                        fontWeight: "bold",
                      }}
                    >
                      Enviar Mensagem
                    </span>
                  </a>
                </div>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#fff" }}
                  />
                  <label className="form-check-label">
                    a39673 - Elmer Gama
                  </label>
                  <a href="#">
                    <span
                      style={{
                        color: "#D63578",
                        marginLeft: "3%",
                        fontWeight: "bold",
                      }}
                    >
                      Enviar Mensagem
                    </span>
                  </a>
                </div>
                <div className="form-check" style={{ marginTop: 15 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#fff" }}
                  />
                  <label className="form-check-label">
                    a38368 - Nuno Gomes
                  </label>
                  <a href="#">
                    <span
                      style={{
                        color: "#D63578",
                        marginLeft: "3%",
                        fontWeight: "bold",
                      }}
                    >
                      Enviar Mensagem
                    </span>
                  </a>
                </div>
              </form>
            </article>
          </div>
        </aside>
        <aside className="col-sm-2">
          <div className="card" style={{ border: 0, backgroundColor: "#fff" }}>
            <article className="card-body">
              <div
                style={{
                  width: 300,
                  height: 65,
                  border: "2px solid #D63578",
                  backgroundColor: "#F6D5E3",
                  marginBottom: 15,
                }}
              >
                <h4
                  className="card-title text-center"
                  style={{ color: "#D63578", marginTop: 15 }}
                >
                  Registar Equipamento
                </h4>
              </div>
              <form onSubmit={(e) => verifyFormRegistarEquipamento(e)}>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                    onChange={handleEquipammentChangeOne}
                    checked={equipammentCheckBox1}
                  />
                  <label className="form-check-label">Computador</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                    onChange={handleEquipammentChangeTwo}
                    checked={equipammentCheckBox2}
                  />
                  <label className="form-check-label">Audio Visual</label>
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Marca do Equipamento:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ width: 300, height: 50, borderColor: "#D63578" }}
                    onChange={(e) => setMarca(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Modelo do Equipamento:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ width: 300, height: 50, borderColor: "#D63578" }}
                    onChange={(e) => setModelo(e.currentTarget.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary text-center"
                  style={{
                    marginTop: 10,
                    backgroundColor: "#D63579",
                    border: 0,
                    width: 145,
                    height: 45,
                  }}
                >
                  Registar
                </button>
              </form>
              <form onSubmit={(e) => verifyFormDeleteEquipamento(e)}>
                <div className="form-group" style={{ marginTop: 30 }}>
                  <select
                    className="form-control"
                    style={{ borderColor: "#D63578", width: 300, height: 60 }}
                    onChange={(e) => setIdEquipamento(e.target.value)}
                  >
                    <option selected hidden style={{ color: "#696f79" }}>
                      Selecionar Equipamento:
                    </option>
                    {equipamentos &&
                      equipamentos.length > 0 &&
                      equipamentos.map((data) => {
                        {
                          if (data["estado"] === 1) {
                            return (
                              <option
                                style={{ color: "#23C263" }}
                                value={data["id"]}
                                key={data["id"]}
                                onClick={() => setIdEquipamento(data["id"])}
                              >
                                {data["marca"]} - {data["modelo"]} (Disponível)
                              </option>
                            );
                          } else if (data["estado"] === 2) {
                            return (
                              <option
                                style={{ color: "#FF0000" }}
                                key={data["id"]}
                                onClick={() => setIdEquipamento(data["id"])}
                              >
                                {data["marca"]} - {data["modelo"]}{" "}
                                (Indisponível)
                              </option>
                            );
                          }
                        }
                      })}
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary text-center"
                  style={{
                    marginTop: 10,
                    backgroundColor: "#D63579",
                    border: 0,
                    width: 145,
                    height: 45,
                  }}
                >
                  Remover
                </button>
              </form>
            </article>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
};
