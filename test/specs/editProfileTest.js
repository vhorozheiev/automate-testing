import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";
import userProfilePage from "../../page/userProfile.page.js";
import { Chance } from "chance";

let chance = new Chance();
let userName = chance.first();
let avatar = chance.avatar({ protocol: "https" });
let defaultSrcValue ="http://localhost:3000/assets/public/images/uploads/default.svg";

describe("Edit user profile", () => {
  it("should change userName and photo", async () => {
    //main page
    await mainPage.open(`http://localhost:3000/#/`);
    await mainPage.openAccountMenu();
    await mainPage.navigateToLogin();
    //login page and go to user account
    await loginPage.loginIn("user@test.com", "123qwe");
    await mainPage.openAccountMenu();
    await userProfilePage.openUserProfile();
    //change username and expect result
    await userProfilePage.changeUserName(userName);
    await expect(userProfilePage.userNameInput).toHaveElementProperty("value", userName);
    //change user photo and expect result
    await userProfilePage.changeUserPhoto(avatar);
     //refresh the page because the src attribute won't change without this option
    await browser.refresh();
    await expect(userProfilePage.userProfileImage).not.toHaveElementProperty("src", defaultSrcValue);
  });
});
