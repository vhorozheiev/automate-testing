import Input from "../elements/input.js";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import BaseElement from "../base/baseElement.js";

class BasketPage extends BasePage {
  get checkOutBtn() {
    return new Button($('//button[@id = "checkoutButton"]'), "checkout button");
  }
  get addNewAddressBtn() {
    return new Button(
      $('//button[@routerlink = "/address/create"]'),
      "add new address button"
    );
  }
  get countryInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a country")]'), "country input");
  }
  get nameInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a name")]'), "name input");
  }
  get mobileNumberInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a mobile number")]'), "mobile number input");
  }
  get zipCodeInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a ZIP code")]'),  "zip code input");
  }
  get addressInput() {
    return new Input($('//textarea[@id="address"]'), "address input");
  }
  get cityInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a city")]'), "city input");
  }
  get stateInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a state")]'), "state input");
  }
  get submitBtn(){
      return new Button($('//button[@id = "submitButton"]'), "submit button");
  }

  async clickToCheckOutButton() {
    await this.checkOutBtn.waitForDisplayed();
    await this.checkOutBtn.click();
  }
  async clickAddNewAddressButton() {
    await this.addNewAddressBtn.waitForDisplayed();
    await this.addNewAddressBtn.click();
  }
  async addNewAddressFillForm(country, name, mobileNumber, zipCode,address,city,state) {
    await this.countryInput.setValue(country);
    await this.nameInput.setValue(name);
    await this.mobileNumberInput.setValue(mobileNumber);
    await this.zipCodeInput.setValue(zipCode);
    await this.addressInput.setValue(address);
    await this.cityInput.setValue(city);
    await this.stateInput.setValue(state);
  }
  async clickToSubmitButton(){
      await this.submitBtn.waitForDisplayed();
      await this.submitBtn.click();
  }
}
export default new BasketPage();
