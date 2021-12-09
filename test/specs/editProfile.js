import loginPage from "../../page/login.page.js";
import mainPage from "../../page/main.page.js";
import userProfilePage from "../../page/userProfile.page.js";
import { Chance } from "chance";

let chance = new Chance();
let userName = chance.first();
let avatar = chance.avatar({ protocol: "https" });
//let defaultSrcValue ="http://localhost:3000/assets/public/images/uploads/default.jpg";
let defaultSrcValue ="http://localhost:3000/assets/public/images/uploads/22.jpg";

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



    //DONT WORK!!!!!!!!!!!!!
    await expect(userProfilePage.userNameInput.haveProperty("value", "aaaa"));
    //change user photo and expect result
    await userProfilePage.changeUserPhoto(avatar);
    //await expect (userProfilePage.userProfileImage.haveProperty("value", "a"));
    //await expect(await $('//img[@class = "img-rounded"]')).not.toHaveElementProperty("src", defaultSrcValue);
  });
});
