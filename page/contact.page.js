import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";
import Slider from "../elements/slider.js";

class ContactPage extends BasePage {
  get customerFeedbackBtn() {
    return new Button(
      $("a[routerlink= '/contact']"),
      "customer feedback button"
    );
  }
  get commentInput() {
    return new Input($("textarea#comment"), "comment's textarea field");
  }
  get ratingSlider() {
    return new Slider($("mat-slider#rating"), "slider for rating");
  }
  get captcha() {
    return new Button($("code#captcha"), "text with captcha");
  }
  get captchaControl() {
    return new Input($("input#captchaControl"), "captcha control input");
  }
  get submitBtn() {
    return new Button($("button#submitButton"), "submit button");
  }
  get thankYouForFeedback() {
    return new Button($("simple-snack-bar.mat-simple-snackbar"));
  }
  async openFeedback() {
    await this.customerFeedbackBtn.waitForDisplayed();
    await this.customerFeedbackBtn.click();
  }
  async writeComment(text) {
    await this.commentInput.setValue(text);
  }
  async setRating(target, duration) {
    await this.ratingSlider.setRating(target, duration);
  }
  async getCaptchResult() {
    let captcha = await this.captcha.getText();
    let answer = await eval(captcha);
    await this.captchaControl.setValue(answer);
  }
  async clickSubmit() {
    await this.submitBtn.click();
  }
  async thankYouForFeedbackIsDisplayed() {
    await this.thankYouForFeedback.waitForDisplayed();
  }
}

export default new ContactPage();
