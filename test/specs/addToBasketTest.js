//$x('//mat-grid-tile[1]//button')
import mainPage from "../../page/main.page.js";
import loginPage from "../../page/login.page.js";
import basketPage from "../../page/basket.page.js";
import { Chance } from "chance";

let chance = new Chance();
let country = chance.country({ full: true });
let name = chance.first();
let mobileNumber = chance.phone({country: "fr", mobile: true , formated: false});
let zipCode = chance.zip();
let address = chance.address();
let city = chance.city();
let state = chance.state();



describe("Customer feedback", () => {
  it("should to add customer feedback with rating 3", async () => {
    await loginPage.open(`http://localhost:3000/#/login`);
    await loginPage.loginIn("user@test.com", "123qwe");
    await mainPage.open(`http://localhost:3000/#/`);
    await mainPage.addToBasketItem();
    await mainPage.goToBasket();
    await basketPage.clickToCheckOutButton();
    await basketPage.clickAddNewAddressButton();
    await basketPage.addNewAddressFillForm(country, name, mobileNumber, zipCode, address, city, state);
    await basketPage.clickToSubmitButton();
    await basketPage.clickToAddressRadioButton();
    await basketPage.clcikToContinueButton();
    await browser.pause(3000);
  });
});
