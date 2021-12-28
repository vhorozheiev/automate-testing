import { Chance } from "chance";
import { expect } from "chai";
import baseApi from "../../../api/baseApi.js";
let chance = new Chance();

let country;
let fullName;
let mobileNum;
let zipCode;
let streetAddress;
let city;
let token;

describe("Api test", () => {
  before(async () => {
    token = await baseApi.getToken("user@test.com", "123qwe");
    country = chance.country();
    fullName = chance.first();
    mobileNum = chance.phone({ formatted: false });
    zipCode = chance.zip();
    streetAddress = chance.address();
    city = chance.city();
  });
  it("should add new address", async () => {
    let requestBody = {
      country,
      fullName,
      mobileNum,
      zipCode,
      streetAddress,
      city,
    };
    let response = await baseApi.POST(
      "http://localhost:3000/api/Addresss/",
      requestBody,
      token
    );
    expect(response.statusCode).to.be.equal(201);
  });
});
