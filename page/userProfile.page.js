class UserProfile {
    
  get userProfileBtn() {
    return $('//button[@role = "menuitem"][1]');
  }
  get userNameInput() {
    return $('//input[@id = "username"]');
  }
  get setUserNameBtn() {
    return $('//button[@id = "submit"]');
  }
  get imageUrlInput() {
    return $('//input[@id = "url"]');
  }
  get linkImageBtn() {
    return $('//button[@id = "submitUrl"]');
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
}
export default new UserProfile();
