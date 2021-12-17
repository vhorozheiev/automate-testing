import mainPage from "../../page/main.page.js";
import loginPage from "../../page/login.page.js";
import savedAddressPage from "../../page/savedAddress.page.js";
import basketPage from "../../page/basket.page.js";
import { Chance } from "chance";

let chance = new Chance();
let country = chance.country({ full: true });
let name = chance.first();
let mobileNumber = "phone";
let zipCode = chance.zip();
let address = chance.address();
let city = chance.city();

describe("Add new address negative test", () => {
  it("couldn't add new address with invalid format mobile phone", async () => {
    await loginPage.open(`http://localhost:3000/#/login`);
    await loginPage.loginIn("user@test.com", "123qwe");
    await mainPage.openAccountMenu();
    await savedAddressPage.navigateToSavedAddress();
    await basketPage.clickAddNewAddressButton();
    await savedAddressPage.addNewAddressFillForm(country,name,mobileNumber,zipCode,address,city);
    //submit button should not be clickable
    await expect(savedAddressPage.submitBtn).not.toBeClickable();
  });
});