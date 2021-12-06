import BaseElement from "../base/baseElement.js";

export default class Button extends BaseElement {
  async isClickable() {
    
    return await this.wdioElement.isClickable();
  }
  async isDisplayed(){
    return this.wdioElement.isDisplayed();
  }
}
