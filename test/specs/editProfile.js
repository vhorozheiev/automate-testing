import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";
import { Chance } from "chance";
import userProfilePage from "../../page/userProfile.page.js";
let chance = new Chance();

let userName = chance.first();
let avatar = chance.avatar({ protocol: "https" });
describe("Edit user profile", () => {
  it("should change userName and photo", async () => {
    //main page
    await mainPage.open();
    await mainPage.openAccountMenu();
    await mainPage.navigateToLogin();
    //login page
    await loginPage.loginIn("user@test.com", "123qwe");
    //go to user account
    await mainPage.openAccountMenu();
    await userProfilePage.openUserProfile();
    //change username and expect result
    await userProfilePage.changeUserName(userName);
    await browser.pause(2000);
    await expect(userProfilePage.userNameInput).toHaveElementProperty("value",userName);
    //change user photo and expect result
    let defaultSrcValue ="http://localhost:3000/assets/public/images/uploads/default.jpg";
    await userProfilePage.changeUserPhoto(avatar);
    await browser.pause(2000);
    await expect(await $('//img[@class = "img-rounded"]')).not.toHaveElementProperty("src", defaultSrcValue);
  });
});
