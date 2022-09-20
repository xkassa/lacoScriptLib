import { post, getFullList, TokenService } from "../common/helpers.js";
import { bookigyUrl, uuBtUrl } from "../common/urls.js";

const ENV = "productionEBC";
const DEVELOPMENT = false;
const uuBtAllWIthSubordinatesGroupCode = "unit-bookigyebc1-groups-allWithSubordinates";

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  let bookigyProfileList, uuBtCasts;
  try {
    const token = await tokenService.getToken();
    bookigyProfileList = await getFullList(bookigyUrl[ENV], "userProfile/list", {}, token);
  } catch (e) {
    console.error(e);
  }
  try {
    const token = await tokenService.getToken();
    uuBtCasts = (await getFullList(uuBtUrl[ENV], "uuGroupIfc/listAccessRoleCasts", { code: uuBtAllWIthSubordinatesGroupCode }, token, 1000, "uafGet")).itemList;
  } catch (e) {
    console.error(e);
  }
  const usersWithoutProfile = [];
  const profilesWithoutCast = [];
  let i = 1;
  bookigyProfileList.itemList.forEach((profile) => {
    const match = uuBtCasts.find((cast) => {
      i++;
      return cast.mainUuIdentity === profile.uuIdentity;
    });
    if (!match) {
      profilesWithoutCast.push(profile.uuIdentity);
    }
  });

  uuBtCasts.forEach((cast) => {
    const match = bookigyProfileList.itemList.find((profile) => {
      i++;
      return cast.mainUuIdentity === profile.uuIdentity;
    });
    if (!match) {
      usersWithoutProfile.push({ uuId: cast.mainUuIdentity, name: cast.name });
    }
  });

  for (let profile of usersWithoutProfile) {
    const token = await tokenService.getToken();
    try {
      await post(bookigyUrl[ENV], "userProfile/create", { uuIdentity: profile.uuId }, token);
    } catch (e) {
      console.log(e);
    }
    console.log(`profile for ${profile.name} was created`);
  }
}
main();
