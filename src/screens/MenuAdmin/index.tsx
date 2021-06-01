import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

import refresh from "../../assets/img/refresh.png";

import Header from "../../components/header";
import Footer from "../../components/footer";

export const MenuAdmin = () => {
  return (
    <>
      <Header />

      <div
        className="row d-flex justify-content-center"
        style={{ color: "#696F79", marginTop: "3%" }}
      >
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
              <form>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#fff" }}
                  />
                  <label className="form-check-label">Estudante</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#fff" }}
                  />
                  <label className="form-check-label">
                    Professor / Funcionário / Administrador
                  </label>
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <select
                    className="form-control"
                    style={{ borderColor: "#D63578", width: 300, height: 50 }}
                  >
                    <option
                      selected
                      disabled
                      hidden
                      style={{ color: "#696F79" }}
                    >
                      Seleciona a conta pretendida
                    </option>
                    <option>Estudante - Nuno Gomes a38368</option>
                    <option>Estudante - Pedro Cunha a45760</option>
                    <option>Estudante - Rui Alves a44231</option>
                    <option>Administrador - Joana Gomes a9032</option>
                    <option>Professor - Tiago Lopes a23991</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label style={{ marginBottom: 5, marginLeft: 5 }}>
                    Informações sobre a conta "a38368":
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
                    <span style={{ color: "#D63578" }}>Username:</span> a38368
                    <br></br>
                    <span style={{ color: "#D63578" }}>Password:</span> ********
                    <span style={{ color: "#FF0000" }}>Ver</span>
                    <br></br>
                    <span style={{ color: "#D63578" }}>Email:</span>{" "}
                    a38368@alunos.ipb.pt<br></br>
                    <span style={{ color: "#D63578" }}>Escola:</span> Escola
                    Superior de Tecnologia e Gestão<br></br>
                    <span style={{ color: "#D63578" }}>
                      Numero de Requisições:
                    </span>{" "}
                    1
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
                  Alterar Conta
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
                  Requisitar Equipamento
                </h4>
              </div>
              <form>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label className="form-check-label">Computador</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label className="form-check-label">Audio Visual</label>
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <select
                    className="form-control"
                    style={{ borderColor: "#D63578", width: 300, height: 50 }}
                  >
                    <option
                      selected
                      disabled
                      hidden
                      style={{ color: "#696f79" }}
                    >
                      Selecionar Equipamento
                    </option>
                    <option>Computador HP</option>
                    <option>Computador Asus</option>
                    <option>AudioVisual Projeto</option>
                    <option>AudioVisual Impressora</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary text-center"
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    backgroundColor: "#D63578",
                    border: 0,
                    width: 145,
                    height: 45,
                  }}
                >
                  Alterar
                </button>
                <label>Devoluções requeridas:</label>
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
              <form>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
                  />
                  <label className="form-check-label">Computador</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    style={{ backgroundColor: "#D63578", color: "#FFF" }}
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
                  Adicionar
                </button>
                <div className="form-group" style={{ marginTop: 30 }}>
                  <select
                    className="form-control"
                    style={{ borderColor: "#D63578", width: 300, height: 60 }}
                  >
                    <option
                      selected
                      disabled
                      hidden
                      style={{ color: "#696f79" }}
                    >
                      Selecionar Equipamento:
                    </option>
                    <option>Computador HP</option>
                    <option>Computador Asus</option>
                    <option>Audio Visual Projetor</option>
                    <option>Auido Visual Impressora</option>
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
