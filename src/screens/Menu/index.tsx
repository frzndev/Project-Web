import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import { useAuth } from "../../contexts";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getEquipamento, sendRequisicao } from "../../services/auth";

export const Menu = () => {
  const [msgErro, setMsgErro] = useState("");
  const [display, setDisplay] = useState(false);

  const { user } = useAuth();
  const [idUser, setIdUser] = useState(user?.id);
  const [idEquipamento, setIdEquipamento] = useState("");
  const [dataRequisicao, setDataRequisicao] = useState("");
  const quantidade = 1;
  const estado = 1;

  const [tipoDeEquipamento, setTipoDeEquipamento] = useState(1);
  const [equipamentos, setEquipamentos] = useState([]);

  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);

  useEffect(() => {
    const meses = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];

    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    setDataRequisicao(
      year +
        "-" +
        meses[month] +
        "-" +
        date +
        " " +
        hours +
        ":" +
        min +
        ":" +
        sec
    );
  }, []);

  const handleChangeOne = () => {
    setCheckBox1(true);
    setCheckBox2(false);
    setTipoDeEquipamento(1);
    setIdEquipamento("");
    getParts();
  };

  const handleChangeTwo = () => {
    setCheckBox1(false);
    setCheckBox2(true);
    setTipoDeEquipamento(2);
    setIdEquipamento("");
    getParts();
  };

  const getParts = async () => {
    setEquipamentos(
      await getEquipamento({
        tipo_equipamento: tipoDeEquipamento,
      })
    );
  };

  const verifyFormRequisicao = (e: any) => {
    e.preventDefault();

    if (idEquipamento === "") {
      setMsgErro("-> Tens de selecionar o Equipamento a Requisitar");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }

    sendForm();
  };

  const sendForm = async () => {
    const send = await sendRequisicao({
      idUser,
      idEquipamento,
      dataRequisicao,
      quantidade,
      estado,
    });

    if (!send) {
      setMsgErro("-> Ocurreu um erro interno, tente mais tarde !");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    } else {
      setMsgErro("-> Equipamento requisitado com sucesso !");
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 5000);
    }
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
              <form
                onSubmit={(e) => verifyFormRequisicao(e)}
                style={{ width: 420 }}
              >
                <h3
                  className="erroMsg"
                  style={display ? { display: "flex" } : { display: "none" }}
                >
                  {msgErro}
                </h3>
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
                    onChange={(e) => setIdEquipamento(e.target.value)}
                  >
                    <option selected hidden>
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
                                disabled
                                style={{ color: "#FF0000" }}
                                key={data["id"]}
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
