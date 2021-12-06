import BaseElement from "../base/baseElement.js";

export default class Div extends BaseElement {
    async isDisplayed(){
        return new this.wdioElement.isDisplayed();
    }
}
