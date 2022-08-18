import axios from "axios";

const getHeaders = (token) => ({ Authorization: `Bearer ${token}` });

const config = (dtoIn, token) => ({
  headers: getHeaders(token),
  params: dtoIn,
});

function getBaseUrl({ host, contextPath, awid }) {
  return host + "/" + contextPath + "/" + awid;
}

function setUseCase(baserUrl, useCase) {
  let url = baserUrl;
  if (typeof url === "object") url = getBaseUrl(url);
  return url + "/" + useCase;
}

const get = async (baseUri, useCase, dtoIn, token = "") => (await axios.get(setUseCase(baseUri, useCase), config(dtoIn, token))).data;
const post = async (baseUri, useCase, dtoIn, token = "") => (await axios.post(setUseCase(baseUri, useCase), dtoIn, { headers: getHeaders(token) })).data;


export { get, post  };
