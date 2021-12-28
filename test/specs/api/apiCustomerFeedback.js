import { expect } from "chai";
import baseApi from "../../../api/baseApi.js";

describe("Api test", () => {
  let token;
  let getCaptcha;
  before(async () => {
    token = await baseApi.getToken("user@test.com", "123qwe");
    getCaptcha = await baseApi.GET("http://localhost:3000/rest/captcha/",token);
  });
  it("should add customers feedback", async () => {
    let requestBody = {
      UserId: 21,
      captcha: getCaptcha.body.answer,
      captchaId: getCaptcha.body.captchaId,
      comment: `feedback from user`,
      rating: 3,
    };
    let response = await baseApi.POST("http://localhost:3000/api/Feedbacks/", requestBody, token);
    expect(response.statusCode).to.be.equal(201);
  });
});
