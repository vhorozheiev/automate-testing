import { Chance } from "chance";
import {expect} from "chai";
import baseApi from "../../../api/baseApi.js";

let chance = new Chance();
let country = chance.country();
let fullName = chance.first();
let mobileNum = chance.phone({ formatted: false });
let zipCode = chance.zip();
let streetAddress = chance.address();
let city = chance.city();
let requestBody = { country, fullName, mobileNum, zipCode, streetAddress, city, };

describe("Api test", () => {
  it("should add new address", async () => {
    let token = await baseApi.getToken();
    let response = await baseApi.POST("http://localhost:3000/api/Addresss/", requestBody, token);
    expect(response.statusCode).to.be.equal(201);
  });
});
