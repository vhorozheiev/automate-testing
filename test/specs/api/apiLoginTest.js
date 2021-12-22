import baseApi from "../../../api/baseApi.js";
import { expect } from "chai";

const email = "user100@test.com";
const password = "123qwe";
//get array with security questions
const setSecurityQuestion = await baseApi.GET(
  "http://localhost:3000/api/SecurityQuestions/"
);
//generate random security question
let randomQuestion = Math.floor(Math.random() * 14) + 1;
let { data } = setSecurityQuestion.body;
let randomSecurityQuestionId = data[randomQuestion].id;
let randomSecurityQuestion = data[randomQuestion].question;
let requestBody = {
  email,
  password,
  passwordRepeat: password,
  securityQuestion: {
    id: randomSecurityQuestionId,
    question: randomSecurityQuestion,
  },
  securityAnswer: password,
};

describe("Api test", () => {
  it("should login with api user created", async () => {
    //create new user
    const response = await baseApi.POST(
      "http://localhost:3000/api/Users/",
      requestBody
    );
    console.log(JSON.stringify(response));
    expect(response.statusCode).to.be.equal(201);
  });
});
