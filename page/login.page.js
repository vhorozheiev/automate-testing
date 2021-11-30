class LoginPage {
  get emailField() {
    return $("#email");
  }
  get passwordField() {
    return $("#password");
  }
  get loginBtn() {
    return $("button#loginButton");
  }
  get closePopupBtn() {
    return $("button.close-dialog");
  }
  async open() {
    await browser.url(`http://localhost:3000/#/login`);
    await this.closePopupBtn.click();
  }

  async loginIn(email, pass) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(pass);
    await this.loginBtn.click();
  }
}

export default new LoginPage();
