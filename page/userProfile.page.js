import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";

class UserProfile extends BasePage {
  get userProfileBtn() {
    return new Button(
      $('//button[@role = "menuitem"][1]'),
      "user profile button"
    );
  }
  get userNameInput() {
    return new Input($('//input[@id = "username"]'), "user name input");
  }
  get setUserNameBtn() {
    return new Button($('//button[@id = "submit"]'), "set user name button");
  }
  get imageUrlInput() {
    return new Input($('//input[@id = "url"]'), "image url input");
  }
  get linkImageBtn() {
    return new Button($('//button[@id = "submitUrl"]'), "link image button");
  }

  async openUserProfile() {
    await this.userProfileBtn.click();
  }
  async changeUserName(userName) {
    await this.userNameInput.setValue(userName);
    await this.setUserNameBtn.click();
  }
  async changeUserPhoto(avatar) {
    await this.imageUrlInput.setValue(avatar);
    await this.linkImageBtn.click();
  }
  async userNameToHaveProperty(property, expectedProperty) {
    return await this.userNameInput.haveProperty(property, expectedProperty);
  }
}
export default new UserProfile();
