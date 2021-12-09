export default class BasePage{
    async open(url){
        await browser.url(url);
    }
    async waitForScreenAvailable() {
        await this.getBaseElement().waitForDisplayed();
    }
}