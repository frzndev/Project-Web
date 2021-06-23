import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { getEquipamento } from "../../services/auth";

export const Menu = () => {
  const [tipoDeEquipamento, setTipoDeEquipamento] = useState(1);
  const [equipamentos, setEquipamentos] = useState([]);

  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);

  const handleChangeOne = () => {
    setCheckBox1(true);
    setCheckBox2(false);
    setTipoDeEquipamento(1);
    getParts();
  };

  const handleChangeTwo = () => {
    setCheckBox1(false);
    setCheckBox2(true);
    setTipoDeEquipamento(2);
    getParts();
  };

  const getParts = async () => {
    setEquipamentos(
      await getEquipamento({
        tipo_equipamento: tipoDeEquipamento,
      })
    );
  };

  return (
    <>
      <Header />

      <div
        className="row d-flex justify-content-center"
        style={{ color: "#696F79", marginTop: "3%", marginBottom: "2%" }}
      >
        <aside className="col-sm-4">
          <div className="card" style={{ border: 0, backgroundColor: "#fff" }}>
            <article className="card-body">
              <div
                style={{
                  width: 420,
                  height: 65,
                  border: "2px solid #D63578",
                  backgroundColor: "#f6d5e3",
                  marginBottom: 10,
                }}
              >
                <h4
                  className="card-title text-center"
                  style={{ color: "#D63578", marginTop: 15 }}
                >
                  Requisitar Equipamento
                </h4>
              </div>
              <form style={{ width: 420 }}>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheck1"
                    style={{ backgroundColor: "#D635578", color: "#FFF" }}
                    onChange={handleChangeOne}
                    checked={checkBox1}
                  />
                  <label className="form-check-label">Computador</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheck2"
                    style={{ backgroundColor: "#D635578", color: "#FFF" }}
                    onChange={handleChangeTwo}
                    checked={checkBox2}
                  />
                  <label className="form-check-label">Audio Visual</label>
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <select
                    className="form-control text-center"
                    style={{ width: 420, height: 65, borderColor: "#D63578" }}
                  >
                    <option selected>
                      Seleciona o equipamento a requisitar
                    </option>
                    {equipamentos &&
                      equipamentos.length > 0 &&
                      equipamentos.map((data) => {
                        {
                          if (data["estado"] === 1) {
                            return (
                              <option
                                style={{ color: "#23C263" }}
                                key={data["id"]}
                              >
                                {data["marca"]} - {data["modelo"]}
                              </option>
                            );
                          } else if (data["estado"] === 2) {
                            return (
                              <option
                                disabled
                                style={{ color: "#FF0000" }}
                                key={data["id"]}
                              >
                                {data["marca"]} - {data["modelo"]}
                              </option>
                            );
                          }
                        }
                      })}
                  </select>
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Para que efeito vais precisar do Equipamento:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEfeito"
                    placeholder="*"
                    style={{ width: 420, height: 65, borderColor: "#D63578" }}
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Quanto tempo irás precisar do Equipamento:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputTempo"
                    placeholder="*"
                    style={{ width: 420, height: 65, borderColor: "#D63578" }}
                  />
                </div>
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
                  Requisitar
                </button>
              </form>
            </article>
          </div>
        </aside>
        <aside className="col-sm-4">
          <div className="card" style={{ border: 0 }}>
            <div className="card-body">
              <div
                style={{
                  width: 420,
                  height: 65,
                  border: "2px solid #D63578",
                  backgroundColor: "#F6D5E3",
                  marginBottom: 10,
                }}
              >
                <h4
                  className="card-title text-center"
                  style={{ color: "#D63578", marginTop: 15 }}
                >
                  Devolver Equipamento
                </h4>
              </div>
              <form style={{ width: 420 }}>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <select
                    className="form-control text-center"
                    style={{ width: 420, height: 65, borderColor: "#D63578" }}
                  >
                    <option
                      selected
                      disabled
                      hidden
                      style={{ color: "#696F79" }}
                    >
                      Seleciona o equipamento a devolver
                    </option>
                    <option style={{ color: "#23C263" }}>
                      COMPUTADOR Asus
                    </option>
                  </select>
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Em que dia estas disponivel a devolver o equipamento:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    style={{ width: 420, height: 65, borderColor: "#D63578" }}
                    placeholder="*"
                  />
                </div>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Alguma observação sobre o equipamento:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    style={{ width: 420, height: 65, borderColor: "#D63578" }}
                    placeholder="*"
                  />
                </div>
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
                  Devolver
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
};
