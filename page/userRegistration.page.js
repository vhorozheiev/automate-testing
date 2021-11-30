class UserRegistration {
  get addNewCustomerLink() {
    return $("div#newCustomerLink > a.primary-link");
  }
  get inputEmailField() {
    return $("input#emailControl");
  }
  get inputPasswordField() {
    return $("input#passwordControl");
  }
  get inputReapetPasswordField() {
    return $("input#repeatPasswordControl");
  }
  get selectSecureQuestion() {
    return $("span.mat-select-placeholder");
  }
  get firstOptionFromSelect() {
    return $('div[role="listbox"]>*:first-child');
  }
  get secureAnswerQuestionField() {
    return $("input#securityAnswerControl");
  }
  get registrationButton() {
    return $("button#registerButton");
  }
  async addNewCustomer() {
    await browser.waitUntil(() => this.addNewCustomerLink.isClickable());
    await this.addNewCustomerLink.click();
  }
  async fillRegistrationForm(email, pass, secureAnswer) {
    await this.inputEmailField.setValue(email);
    await this.inputPasswordField.setValue(pass);
    await this.inputReapetPasswordField.setValue(pass);
    await this.selectSecureQuestion.click();
    await this.firstOptionFromSelect.click();
    await this.secureAnswerQuestionField.setValue(secureAnswer);
  }
  async registrationButtonClick() {
    await this.registrationButton.click();
  }
}

export default new UserRegistration();
