import axios from "axios";
import config from "../config/config.json";

const headers = {
  accept: "application/json",
  "Content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const SignIn = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.users}login`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};

export const SignUp = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.users}register`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};

export const getEquipamento = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.equipamento}filter`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};
