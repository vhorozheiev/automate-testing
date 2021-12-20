import superagent from "superagent";

class BaseAPI {
  async GET(url, token) {
    console.log(`sending GET request to ${url}`);
    return await superagent.get(url);
  }
  async POST(url, data, token) {
    console.log(`sending POST request to ${url}`);
    return await superagent.post(url).send(data);
  }
  async PUT(url, token) {
    console.log(`sending PUT request to ${url}`);
    return await superagent.put(url);
  }
  async DELETE(url, token) {
    console.log(`sending DELETE request to ${url}`);
    return await superagent.delete(url);
  }
  async getToken(){
    console.log("get token to authorised");
    let token = await superagent.get("http://localhost:3000/rest/user/login");
    console.log(JSON.stringify(token));
  }
}

export default new BaseAPI();
