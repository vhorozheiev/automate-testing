import mainPage from "../../page/main.page.js";
import loginPage from "../../page/login.page.js";

describe("Login test application", () => {
  it("shouldn't login with invalid credentials", async () => {
    //main page
    await mainPage.open();
    await mainPage.openAccountMenu();
    await mainPage.navigateToLogin();
    //login page
    await loginPage.loginIn("user@test.com", "user");
    //expect to negative
    await expect($("//div[contains(@class, 'error')]")).toHaveText("Invalid email or password.");

    //why doesn't this option work? I don't understand it.
    //await expect(loginPage.errorMsg).toHaveText("Invalid email or password.");
  });
});

