import superagent from "superagent";

describe("Api test", () => {
  it("should login with api", async () => {
    let requestBody = {
      email: "test2@gmail.com",
      password: "123qwe",
      passwordRepeat: "123qwe",
      securityQuestion: {
        id: "2",
        question: "Mother's maiden name?",
        createdAt: "2021-12-10T18:57:43.228Z",
        updatedAt: "2021-12-10T18:57:43.228Z",
      },
      securityAnswer: "123",
    };
    const response = await superagent.post(
      "http://localhost:3000/api/Users/",
      requestBody
    );
    await expect(response.statusCode);
  });
});
