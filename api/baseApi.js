import superagent from "superagent";

class BaseAPI {
  async GET(url, token) {
    console.log(`sending GET request to ${url}`);
    return await superagent.get(url).set("Authorization", `Bearer ${token}`);
  }
  async POST(url, data, token) {
    console.log(`sending POST request to ${url}`);
    return await superagent.post(url).send(data).set("Authorization", `Bearer ${token}`);
  }
  async PUT(url,data, token) {
    console.log(`sending PUT request to ${url}`);
    return await superagent.put(url).send(data).set("Authorization", `Bearer ${token}`);
  }
  async DELETE(url, data, token) {
    console.log(`sending DELETE request to ${url}`);
    return await superagent.delete(url).send(data).set("Authorization", `Bearer ${token}`);
  }
  async getToken(email, password) {
    console.log("get token to authorised");
    let requestBody = { email, password};
    let response = await superagent.post(
      "http://localhost:3000/rest/user/login",requestBody);
    let token = response.body.authentication.token;
    return token;
  }
}

export default new BaseAPI();
