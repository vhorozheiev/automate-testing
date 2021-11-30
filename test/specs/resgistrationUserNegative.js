import loginPage from "../../page/login.page.js";
import userRegistrationPage from "../../page/userRegistration.page.js";
import { Chance } from "chance";
let chance = new Chance();

let email = "errormassage";
let pass = chance.string({ length: 4 });
let secureAnswer = chance.color();

describe("Register new user", () => {
  it("should register new user with valid credentials", async () => {
    //register new user
    await loginPage.open();
    await userRegistrationPage.addNewCustomer();
    await userRegistrationPage.fillRegistrationForm(email, pass, secureAnswer);
    //expect to negative test
    await expect($("div#registration-form mat-error").isDesplayed());
  });
});
