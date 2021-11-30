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

  async loginIn(email, pass) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(pass);
    await this.loginBtn.click();
  }
}

export default new LoginPage();
