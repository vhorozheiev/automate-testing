import { Chance } from "chance";
import { expect } from "chai";
import baseApi from "../../../api/baseApi.js";
let chance = new Chance();

let cardNum;
let expMonth;
let fullName;
let expYear;
let token;

describe("Api test", () => {
  before(async () => {
    token = await baseApi.getToken("user@test.com", "123qwe");
    cardNum = chance.cc({ type: "Mastercard" });
    expMonth = Math.floor(Math.random() * 12) + 1;
    fullName = chance.first();
    expYear = Math.floor(Math.random() * (2099 - 2080 + 1)) + 2080;
  });
  it("should add new card", async () => {
    let requestBody = { cardNum, expMonth, expYear, fullName };
    const response = await baseApi.POST("http://localhost:3000/api/Cards/", requestBody, token);
    expect(response.statusCode).to.be.equal(201);
  });
});
