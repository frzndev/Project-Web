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

export const getUtilizadores = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.users}filter`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};

export const getUtilizador = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.users}id`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};

export const removeUtilizador = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.users}remove`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};

export const getAllEquipamentos = async () => {
  let req = {
    method: "get",
    url: `${config.urlApi.equipamento}`,
    headers,
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

export const sendEquipamento = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.equipamento}register`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};

export const removeEquipamento = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.equipamento}remove`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};

export const sendRequisicao = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.requisicao}register`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};

export const getDevolucao = async (data) => {
  let req = {
    method: "post",
    url: `${config.urlApi.devolucao}filter`,
    headers,
    data,
  };
  const response = await axios(req);
  return response.data;
};
