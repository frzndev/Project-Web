import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import LeftSide from "../../components/leftSide";
import arrowBack from "../../assets/img/arrow_back.png";
import arrowFront from "../../assets/img/arrow_front.png";
import { useAuth } from "../../contexts";

export const Login = () => {
  const { AuthLogin } = useAuth();

  let history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  async function sendForm(e: any) {
    e.preventDefault();

    const session = await AuthLogin({ login, password });

    console.log("session:", session);

    if (!session) {
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    } else {
      history.push("/menu");
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
              <form onSubmit={(e) => sendForm(e)}>
                <div className="form-group" style={{ marginTop: 10 }}>
                  <label
                    htmlFor="inputUser"
                    style={{ marginBottom: 5, marginLeft: 5, color: "#696F79" }}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputUser"
                    placeholder="Ex.: aXXXXX"
                    style={{ width: 430, height: 65 }}
                    value={login}
                    onChange={(e) => setLogin(e.currentTarget.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
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
                <h3
                  className="erroMsg"
                  style={display ? { display: "flex" } : { display: "none" }}
                >
                  Usuário ou senha inválidos
                </h3>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
