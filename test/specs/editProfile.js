import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";
import userProfilePage from "../../page/userProfile.page.js";
import { Chance } from "chance";

let chance = new Chance();
let userName = chance.first();
let avatar = chance.avatar({ protocol: "https" });
let defaultSrcValue ="http://localhost:3000/assets/public/images/uploads/default.jpg";

describe("Edit user profile", () => {
  it("should change userName and photo", async () => {
    //main page
    await mainPage.open();
    await mainPage.openAccountMenu();
    await mainPage.navigateToLogin();
    //login page and go to user account
    await loginPage.loginIn("user@test.com", "user123");
    await mainPage.openAccountMenu();
    await userProfilePage.openUserProfile();
    //change username and expect result
    await userProfilePage.changeUserName(userName);
    await browser.pause(2000);
    await expect (userProfilePage.userNameToHaveProperty(`value`, userName));
    //await expect(userProfilePage.userNameInput.haveProperty(`value`, userName));
    //change user photo and expect result
    await userProfilePage.changeUserPhoto(avatar);
    await browser.pause(2000);
    await expect(await $('//img[@class = "img-rounded"]')).not.toHaveElementProperty("src", defaultSrcValue);
  });
});
