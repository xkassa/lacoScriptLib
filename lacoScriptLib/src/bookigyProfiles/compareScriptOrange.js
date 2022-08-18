import axios from "axios";

async function main() {
  const token = "";

  const bookigyUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookigy-workplaceg01",
    awid: "dc6937f44263475eb72f62e7a150f073"
  };
  const uuBtUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-businessterritory-maing01",
    awid: "5945f6065f0740b48db7f9aecc52a96a"
  };

  function getBaseUrl({ host, contextPath, awid }) {
    return host + "/" + contextPath + "/" + awid;
  }

  function setUseCase(baserUrl, useCase) {
    return baserUrl + "/" + useCase;
  }

  const headers = { Authorization: `Bearer ${token}` };
  const config = (dtoIn) => ({
    headers,
    params: dtoIn
  });

  const userProfileList = setUseCase(getBaseUrl(bookigyUrl), "userProfile/list");
  const userCastList = setUseCase(getBaseUrl(uuBtUrl), "uuGroupIfc/listAccessRoleCasts");
  let profileList, castList;
  try {
    profileList = await axios.get(
      userProfileList,
      config({})
    );
    castList = await axios.get(
      userCastList,
      config({
        "id": "5f67b63454c1a400277cdf89",
        "pageInfo": {
          "pageIndex": 0,
          "pageSize": 3000
        }
      })
    );
  } catch (e) {
    console.log(e);
  }

  console.log(profileList.data.itemList.length);
  console.log(castList.data.itemList.length);

  profileList = profileList.data.itemList;
  castList = castList.data.itemList;
  let profilesWithoutCast = [];
  let usersWithoutProfile = [];

  profileList.forEach((profile) => {
    const match = castList.find((cast) => {
      return cast.mainUuIdentity === profile.uuIdentity;
    });
    if (!match) {
      profilesWithoutCast.push(profile.uuIdentity);
    }
  });

  castList.forEach((cast) => {
    const match = profileList.find((profile) => {
      return cast.mainUuIdentity === profile.uuIdentity;
    });
    if (!match) {
      usersWithoutProfile.push({ uuId: cast.mainUuIdentity, name: cast.name });
    }
  });
 /* const userProfileCreate = setUseCase(getBaseUrl(bookigyUrl), "userProfile/create");
  try {
    for (let profile of usersWithoutProfile) {
      let newProfile = await axios.post(
        userProfileCreate,
        {
          uuIdentity: profile.uuId
        },
        { headers }
      );
      console.log("createdProfileFor" + profile.name)
      console.log(newProfile.data.userProfile)
    }

  } catch (e) {

  }*/

  console.log(`profilesWithoutCast`);
  console.log(profilesWithoutCast);
  console.log(`usersWithoutProfile`);
  console.log(usersWithoutProfile);

}

main();
