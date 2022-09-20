import axios from "axios";

async function main() {
  const token = "eyJraWQiOiI4NzNmN2RiYmU3MGU0MWYzODIwNTUyYTU2MGViMGY0ZDQ0MjcxY2Y3YzU5MTQxMGNiMTEwY2MzOTY2MDM4NzQiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoiVWQzQ244aHpZRXNUME44YkVmYzc2WVdDX3J6TkZTZWoxTVFCMzVYSkxHRSIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJqNjloMTFxaTRxbyIsImNsaWVudF91dWlkZW50aXR5IjoiMzE5Ni0zMjg3LTE3OTAtMSIsImFjciI6InN0YW5kYXJkIiwiYXVkIjpbImE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwiaHR0cHM6XC9cLyIsImh0dHA6XC9cL2xvY2FsaG9zdCJdLCJjbGllbnRfdXVpZGVudGl0eV9uYW1lIjoiQVdJRCBhOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsIm5iZiI6MTY2MjQ2NzQxMywidXVpZGVudGl0eV90eXBlIjoidXVQZXJzb24iLCJhdXRoX3RpbWUiOjE2NjI0Njc0MTEsIm5hbWUiOiJMYWRpc2xhdiBLYcWhxaFhIiwiZXhwIjoxNjYyNDY5MjEzLCJpYXQiOjE2NjI0Njc0MTMsImp0aSI6Ijc0MThjNDNhMGI3NDRjMjk4YmRmMGE4MGUzYjczMzRjIn0.OHxcjmIJ2r2MncmD3gSKrJg4fCM3cG6BzhIm_h9aviB4e_fOhG8NMgCnoAtXveJMJwVg_uh-Eh9NUfD25nga59P6JIJVT4rtv-Yg0rwdMqtWyctipfZCUdmmQywynecXmPs9OHGAZ52t1ex2stvQ43kHiQtWW1n6g_RzTV35-dHZ_732sXqXJE86aiadvyXtTWKg9M1OwjDmRR7nphEt41rhagVsdpujmyj5F0smbluaSQJgNqfsxz3IcIZP9JF8aQOjM64XwePmTTXc3598eUSpCNstzGs2PtLcpmd8jVKhSotz0L0TJIkHC88IzEut53c6h_XkmnPmUvJT6sOHJw";

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
