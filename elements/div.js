import BaseElement from "../base/baseElement.js";

export default class Div extends BaseElement {
    async isDisplayed(){
        return await super.isDisplayed();
    }
}
