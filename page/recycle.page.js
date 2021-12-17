import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";

class RecyclePage extends BasePage {
    get ordersPaymentBtn(){
        return new Button ($('//button[@aria-label = "Show Orders and Payment Menu"]'), "orders & payment button");
    }
    get mySavedAddressBtn(){
        return new Button($('//button[@routerlink="/address/saved"]'), "my saved adress button");
    }
    get recycleBtn(){
        return new Button($('//button[@routerlink = "/recycle"]'), "recylce button");
    }
    get quantityInput(){
        return new Input($('//input[@data-placeholder = "...in liters"]'), "input for set quantity");
    }
    get addressOptionRadioBtn(){
        return new Button($('//app-address//mat-radio-button'), "address option radio button")
    }
    get submitBtn(){
        return new Button($('//button[@id = "recycleButton"]'), "submit button");
    }
    async navigateToSavedAddress(){
        await this.ordersPaymentBtn.click();
        await this.mySavedAddressBtn.click();
    }
    async navigateToRecycle(){
        await this.ordersPaymentBtn.click();
        await this.recycleBtn.click();
      }
    async setInfo(value){
        await this.quantityInput.setValue(value);
        await this.addressOptionRadioBtn.click();
    }
}

export default new RecyclePage();