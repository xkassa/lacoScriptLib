import axios from "axios";

async function main() {
  const token = "eyJraWQiOiI3YzJkOGIyYzhlYjg0Y2FlYWQ1YjczNTIzZTcyZDE5YjdiYzNjN2IwNjIzMDRmMjhiM2RlNzg4NGIxMmRjOGMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoick5UaTlRRlh3YWJoZUxXRFIwa00wSFgyT3EyYV9NQWw5aVBHTnNlYmlUTSIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJ2MWhqZGNpNmdsbyIsImNsaWVudF91dWlkZW50aXR5IjoiMzE5Ni0zMjg3LTE3OTAtMSIsImFjciI6InN0YW5kYXJkIiwiYXVkIjpbImE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwiaHR0cHM6XC9cLyIsImh0dHA6XC9cL2xvY2FsaG9zdCJdLCJjbGllbnRfdXVpZGVudGl0eV9uYW1lIjoiQVdJRCBhOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsIm5iZiI6MTY0NTgwMzY5NiwidXVpZGVudGl0eV90eXBlIjoidXVQZXJzb24iLCJhdXRoX3RpbWUiOjE2NDU4MDM2OTQsIm5hbWUiOiJMYWRpc2xhdiBLYcWhxaFhIiwiZXhwIjoxNjQ1ODA1NDk2LCJpYXQiOjE2NDU4MDM2OTYsImp0aSI6ImM1ZDhjODJjYThlMTQ1NjU5MjE2MWNiM2E2YzhhYTU3In0.1nxvV_W0HCipbIFd3jzF2GO4G_A6HzYOMoFEP6ulRk6JoQFQTEslded2v9ZxXLDj_TTx5B0SO8SiGdYXypViGhwJUVlSrULU2tVrGtZYjktx61mcrfZw60SOSxSPGT_MyoFPnwve6zpcRHvgpui6N8vwzPXaOKwwzLgAj76DNRhg8G5m6ro4qryMX8FReyDhosnysH0XfhrHE7uDCX-luSN0ruqbp_DbWYjRButZRflmKgSgANZ1MNbAvuWMJzsEmXH-J_rN1IbvzZEu6bHQCN2aKydXg_qb6g1lnFcZu9Bb9oLFuPadJUPSIPqlrtUxRvRbhZ4LGvGldI2fUs7a1Q";

  const bookigyUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookigy-workplaceg01",
    awid: "b0373cefd7da4c25b6612e3d85e30915"
  };
  const uuBtUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-businessterritory-maing01",
    awid: "7a4b2e577fde4af5bec0894d596dd164"
  };

  function getBaseUrl({ host, contextPath, awid }) {
    return host + "/" + contextPath + "/" + awid;
  }

  function setUseCase(baserUrl, useCase) {
    return baserUrl + "/" + useCase;
  }

  const config = (dtoIn) => ({
    headers: { Authorization: `Bearer ${token}` },
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
        "id": "60b5e27b114f1c0052c575cb",
        "pageInfo": {
          "pageIndex": 0,
          "pageSize": 1000
        }
      })
    );
  } catch (e) {
    console.log(e);
  }

 console.log(profileList.data.itemList.length)
 console.log(castList.data.itemList.length)

  profileList = profileList.data.itemList;
  castList = castList.data.itemList;
  let profilesWithoutCast=[];
  let usersWithoutProfile=[];

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

  console.log(`profilesWithoutCast`)
  console.log(profilesWithoutCast)
  console.log(`usersWithoutProfile`)
  console.log(usersWithoutProfile)

}

main();
