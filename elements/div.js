import BaseElement from "../base/baseElement.js";

<<<<<<< HEAD
export default class Div extends BaseElement {}
=======
export default class Div extends BaseElement {
    async isDisplayed(){
        return new this.wdioElement.isDisplayed();
    }
}
>>>>>>> origin/015-webdriverio
