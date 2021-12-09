export default class BaseElement {
  constructor(wdioElement, name) {
    this.wdioElement = wdioElement;
    this.elementName = name;
  }
  async click() {
    console.log(`click on the element ${this.elementName}`);
    await this.wdioElement.click();
  }
  async haveProperty(property, expectedProperty){ 
    return await this.wdioElement.toHaveElementProperty(property, expectedProperty);
  }
  async isExisting(){
    return await this.wdioElement.isExisting();
  }
  async isDisplayed(){
    return await this.wdioElement.isDisplayed();
  }
  async waitForDisplayed(){
    await browser.waitUntil(
      async () => await this.wdioElement.isClickable()
    );
  }
}
