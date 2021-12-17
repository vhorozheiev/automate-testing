import BaseElement from "../base/baseElement.js";

export default class Select extends BaseElement {
  async selectByAttribute(attribute, value) {
    await this.wdioElement.selectByAttribute(attribute, value);
  }
}
