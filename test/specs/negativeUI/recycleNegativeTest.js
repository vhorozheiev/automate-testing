import mainPage from "../../../page/main.page.js";
import recyclePage from "../../../page/recycle.page.js";
import loginPage from "../../../page/login.page.js";

before(async() =>{
  await loginPage.open(`http://localhost:3000/#/login`);
  await loginPage.loginIn("user@test.com", "123qwe");
});
describe("Recycleng negative test", () => {
  it("couldn't order recycle with invalid quantity", async () => {
    await mainPage.openAccountMenu();
    await recyclePage.navigateToRecycle();
    await recyclePage.setInfo(9);
    await expect(recyclePage.submitBtn).not.toBeClickable();
  });
});
