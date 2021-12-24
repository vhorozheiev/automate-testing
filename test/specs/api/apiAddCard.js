import { Chance } from "chance";
import { expect } from "chai";
import baseApi from "../../../api/baseApi.js";
let chance = new Chance();

let cardNum = chance.cc({ type: "Mastercard" });
let expMonth = Math.floor(Math.random() * 12) + 1;
let fullName = chance.first();
let expYear = Math.floor(Math.random() * (2099 - 2080 + 1)) + 2080;
let requestBody = { cardNum, expMonth, expYear, fullName };

describe("Api test", () => {
  it("should add new card", async () => {
    let token = await baseApi.getToken();
    const response = await baseApi.POST("http://localhost:3000/api/Cards/", requestBody, token);
    expect(response.statusCode).to.be.equal(201);
  });
});
