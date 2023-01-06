import _ from "lodash";
import flat from "flat";
import { get, post } from "./rest-clients.js";
import productionUser from "../configDir/6399_5018_1.js";
import devUser from "../configDir/1063_7460_6908_0000.js";
import { loremIpsum } from "lorem-ipsum";
const grantToken = async (dev = false) => {
  let token;
  try {
    if (dev) {
      token = await post("https://uuapp-dev.plus4u.net/uu-oidc-maing02/eca71064ecce44b0a25ce940eb8f053d", "oidc/grantToken", {
        grant_type: "password",
        accessCode1: devUser.accessCode1,
        accessCode2: devUser.accessCode2,
        scope: "openid https://uuapp-dev.plus4u.net http://localhost",
      });
    } else {
      token = await post("https://uuidentity.plus4u.net/uu-oidc-maing02/bb977a99f4cc4c37a2afce3fd599d0a7", "oidc/grantToken", {
        grant_type: "password",
        accessCode1: productionUser.accessCode1,
        accessCode2: productionUser.accessCode2,
        scope: "openid https://uuappg01-eu-w-1.plus4u.net https://uuapp.plus4u.net/",
      });
    }
  } catch (e) {
    console.log(e);
  }
  console.log(`${dev ? "dev" : "production"} token obtained`);
  return token.id_token;
};

const getPersonByUuId = (uuIdentity, token) => {
  return get("https://uuappg01-eu-w-1.plus4u.net/uu-plus4upeople-maing01/56ac93ddb0034de8b8e4f4b829ff7d0f", "getPersonInfoByUuIdentity", { uuIdentity }, token);
};

const deepPick = (paths, obj) => _.fromPairs(paths.map((p) => [_.last(p.split(".")), _.get(obj, p)]));

const getFullList = async (baseUri, useCase, dtoIn = {}, token = "", pageSize = 1000, method = "uafGet") => {
  let pageIndex = 0;
  dtoIn = { ...dtoIn, pageInfo: { pageIndex, pageSize } };
  const itemList = [];
  let running = true;
  while (running) {
    dtoIn.pageInfo.pageIndex = pageIndex;
    let newItemList;
    switch (method) {
      case "get":
        try {
          newItemList = await get(baseUri, useCase, dtoIn, token);
        } catch (e) {
          console.error(e);
        }
        break;
      case "post":
        newItemList = await post(baseUri, useCase, dtoIn, token);
        break;
      case "uafGet":
        try {
          newItemList = await uafGet(baseUri, useCase, dtoIn, token);
        } catch (e) {
          console.error(e);
        }
        break;
      default:
        try {
          newItemList = await get(baseUri, useCase, dtoIn, token);
        } catch (e) {
          console.error(e);
        }
    }
    if (newItemList.itemList.length === 0) {
      running = false;
    } else {
      itemList.push(...newItemList.itemList);
      pageIndex++;
    }
  }
  return { itemList, pageInfo: { pageIndex: 0, pageSize: itemList.length, total: itemList.length } };
};

class TokenService {
  constructor(dev, updatePeriodMinutes = 5) {
    this.updatePeriodMinutes = updatePeriodMinutes;
    this.dev = dev;
    this.token = null;
    this.nextUpdateToken = new Date();
  }
  async getToken() {
    if (this.nextUpdateToken <= new Date()) {
      this.token = await grantToken(this.dev);
      this.nextUpdateToken.setMinutes(this.nextUpdateToken.getMinutes() + this.updatePeriodMinutes);
    }
    return this.token;
  }
}

function getUnicornCorrectGetUrl(useCase, dtoIn) {
  const flatten = flat(dtoIn);
  let correctUrl = useCase;
  Object.keys(flatten).forEach((key, index) => {
    correctUrl += (index ? "&" : "?") + key + "=" + flatten[key];
  });
  return correctUrl;
}

const uafGet = async (baseUri, useCase, dtoIn, token = "") => await get(baseUri, getUnicornCorrectGetUrl(useCase, dtoIn), {}, token);

const oneWord = () => loremIpsum({ count: 1, sentenceUpperBound: 1, sentenceLowerBound: 1 }).replace(".", "");
const lorem = loremIpsum;

function wait(time = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done!");
    }, time);
  });
}
export { get, post, uafGet, grantToken, getPersonByUuId, deepPick, getFullList, oneWord, TokenService, lorem, wait };
export default { get, post, uafGet, grantToken, getPersonByUuId, deepPick, getFullList, oneWord, TokenService, lorem, wait };
