import Input from "../elements/input.js";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Div from "../elements/div.js";

class BasketPage extends BasePage {
  get addToBasketFirstItemBtn() {
    return new Button($("//mat-grid-tile[1]//button"),"first add to basket button on the page");
  }
  get addToBasketSecondItemBtn() {
    return new Button($("//mat-grid-tile[2]//button"),"first add to basket button on the page");
  }
  get basketBtn() {
    return new Button($('//button[@routerlink = "/basket"]'), "basket button");
  }
  get removeItemBtn(){
    return new Button($('//*[@data-icon="trash-alt"]'), "remove button");
  }
  get checkOutBtn() {
    return new Button($('//button[@id = "checkoutButton"]'), "checkout button");
  }
  get addNewAddressBtn() {
    return new Button($('//button[@routerlink = "/address/create"]'),"add new address button");
  }
  get countryInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a country")]'),"country input");
  }
  get nameInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a name")]'),"name input");
  }
  get mobileNumberInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a mobile number")]'),"mobile number input");
  }
  get zipCodeInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a ZIP code")]'),"zip code input");
  }
  get addressInput() {
    return new Input($('//textarea[@id="address"]'), "address input");
  }
  get cityInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a city")]'),"city input");
  }
  get stateInput() {
    return new Input($('//input[contains(@data-placeholder, "provide a state")]'),"state input");
  }
  get submitBtn() {
    return new Button($('//button[@id = "submitButton"]'), "submit button");
  }
  get addressRadioBtn() {
    return new Button($("//mat-radio-button/label"),"radio button for check address option");
  }
  get continuePaymentBtn() {
    return new Button($('//button[contains(@aria-label, "payment selection")]'),"continue button");
  }
  get chooseSpeedDeliveryBtn() {
    return new Button($("//mat-header-row//following-sibling::mat-row[1]//mat-radio-button","button for choose delivery speed"));
  }
  get continueDeliveryMethodBtn() {
    return new Button($('//button[@aria-label = "Proceed to delivery method selection"]'),"continue button");
  }
  get addNewCardBtn(){
    return new Button ($('//*[contains(text(), " Add a credit or debit card ")]'), "add new card button");
  }
  get cardNameInput(){
    return new Input($('//div[@role = "region"]//input[contains(@id, "mat-input")][contains(@type, "text")]'), "card name input");
  }
  get cardNumberInput(){
    return new Input($('//div[@role = "region"]//input[contains(@id, "mat-input")][contains(@type, "number")]'), "card name input");
  }
  get paymentOptionRadioBtn(){
    return new Button($('//mat-table//label'), "radio button for select a card")
  }
  get continuePaymentOptionBtn(){
    return new Button($('//button[@aria-label = "Proceed to review"]'), "payment option continue button ");
  }
  get getOrderBtn(){
    return new Button($('//button[@aria-label = "Complete your purchase"]'), "get order button ");
  }
  get confirmationDiv(){
    return new Div($('//div[@class = "confirmation"]'), "div with confirm text about order");
  }
  async addToBasketItem() {
    await this.addToBasketFirstItemBtn.click();
    await this.addToBasketSecondItemBtn.click();
  }
  async goToBasket() {
    await this.basketBtn.click();
  }
  async removeItemFromBasket(){
    await this.removeItemBtn.click();
  }
  async clickToCheckOutButton() {
    await this.checkOutBtn.waitForDisplayed();
    await this.checkOutBtn.click();
  }
  async clickAddNewAddressButton() {
    await this.addNewAddressBtn.waitForDisplayed();
    await this.addNewAddressBtn.click();
  }
  async addNewAddressFillForm(country,name,mobileNumber,zipCode,address,city,state) {
    await this.countryInput.setValue(country);
    await this.nameInput.setValue(name);
    await this.mobileNumberInput.setValue(mobileNumber);
    await this.zipCodeInput.setValue(zipCode);
    await this.addressInput.setValue(address);
    await this.cityInput.setValue(city);
    await this.stateInput.setValue(state);
    await this.submitBtn.waitForDisplayed();
    await this.submitBtn.click();
    await this.addressRadioBtn.click();
    await this.continuePaymentBtn.waitForDisplayed();
    await this.continuePaymentBtn.click();
  }
  async chooseDeliverySpeed() {
    await this.chooseSpeedDeliveryBtn.click();
    await this.continueDeliveryMethodBtn.waitForDisplayed();
    await this.continueDeliveryMethodBtn.isClickable();
    await this.continueDeliveryMethodBtn.click();
  }
  async addNewCard(cardName, cardNumber){
    await this.addNewCardBtn.click();
    await this.cardNameInput.setValue(cardName);
    await this.cardNumberInput.setValue(cardNumber);
    await this.paymentOptionRadioBtn.click();
    await this.continuePaymentOptionBtn.click();
  }
  async getOrderSummary(){
    await this.getOrderBtn.click();
  }
}
export default new BasketPage();
