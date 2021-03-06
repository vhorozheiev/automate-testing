import loginPage from "../../../page/login.page.js";
import mainPage from "../../../page/main.page.js";


before(async() =>{
  await loginPage.open(`http://localhost:3000/#/login`);
  await loginPage.loginIn("user@test.com", "123qwe");
});
describe("Login test application", () => {
  it("should login with valid credentials", async () => {
    await mainPage.openAccountMenu();
    await expect(loginPage.logoutBtn).toBeDisplayed();
  });
});
