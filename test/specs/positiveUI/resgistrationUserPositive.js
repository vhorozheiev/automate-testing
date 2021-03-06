import loginPage from "../../../page/login.page.js";
import mainPage from "../../../page/main.page.js";
import userRegistrationPage from "../../../page/userRegistration.page.js";
import { Chance } from "chance";


let chance = new Chance();
let email = chance.email({ domain: "example.com" });
let pass = chance.string({ length: 5 });
let secureAnswer = chance.color();
let option = "Mother's maiden name?";

before(async() =>{
  await loginPage.open(`http://localhost:3000/#/login`);
});
describe("Register new user", () => {
  it("should register new user with valid credentials", async () => {
    await userRegistrationPage.addNewCustomer();
    await userRegistrationPage.fillRegistrationForm(email, pass, secureAnswer, option);
    await userRegistrationPage.registrationButtonClick();
    await loginPage.loginIn(email, pass);
    await mainPage.openAccountMenu();
    await expect (userRegistrationPage.logoutButton).toBeClickable();
  });
});
