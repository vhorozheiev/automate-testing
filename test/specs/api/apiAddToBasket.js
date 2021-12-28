import { expect } from "chai";
import baseApi from "../../../api/baseApi.js";

let token;
let getBasketId;

//need to fix getBasketId
describe("Api test", () => {
  before(async () => {
    token = await baseApi.getToken("user@test.com", "123qwe");
    getBasketId = await baseApi.GET("http://localhost:3000/rest/basket/7", token);
    console.log(JSON.stringify(await getBasketId.body.id));
  });
  it("should add item to basket", async () => {
    let requestBody = { ProductId: 1, BasketId: getBasketId.body.id, quantity: 2 };
    let response = await baseApi.POST("http://localhost:3000/api/BasketItems/", requestBody, token);
    expect(response.statusCode).to.be.equal(200);
  });
});
