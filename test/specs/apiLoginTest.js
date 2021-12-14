import superagent from "superagent";
import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";

describe("Api test", () => {
  it("should login with api user created", async () => {
    const userEmail = "user@test.com";
    const userPassword = "123qwe";
    //get array with security questions
    const setSecurityQuestion = await superagent.get(
      "http://localhost:3000/api/SecurityQuestions/"
    );
    //generate random security question
    let randomQuestion = Math.floor(Math.random() * 14) + 1;
    let { data } = setSecurityQuestion.body;
    let randomSecurityQuestionId = data[randomQuestion].id;
    let randomSecurityQuestion = data[randomQuestion].question;

    let requestBody = {
      email: userEmail,
      password: userPassword,
      passwordRepeat: userPassword,
      securityQuestion: {
        id: randomSecurityQuestionId,
        question: randomSecurityQuestion,
      },
      securityAnswer: userPassword,
    };
    const request = await superagent.post(
      "http://localhost:3000/api/Users/",
      requestBody
    );
    //expected that status code to be equal 200
    await expect(request.statusCode == 200);
    //login after api user created
    await loginPage.open(`http://localhost:3000/#/login`);
    await loginPage.loginIn(userEmail, userPassword);
    await mainPage.openAccountMenu();
    await expect(loginPage.logoutBtn).toBeDisplayed();
  });
});