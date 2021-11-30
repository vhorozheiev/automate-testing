class spcialPage {
  get sideNavBtn() {
    return $('button[aria-label="Open Sidenav"]');
  }
  get aboutUsBtn() {
    return $("a[routerlink = '/about']");
  }
  get facebookBtn() {
    return $('a[href*="https://www.facebook.com/"]');
  }
  async openSideNav() {
    await this.sideNavBtn.click();
  }
  async openAboutUs() {
    await browser.waitUntil(() => this.aboutUsBtn.isClickable());
    await this.aboutUsBtn.click();
  }
  async goToFacebook() {
    await this.facebookBtn.click();
  }
  async switchWidnowWithTitle(windowTitle) {
    let currentWindow = await browser.getWindowHandle();
    for (let handle of await browser.getWindowHandles()) {
      await browser.switchToWindow(handle);
      if ((await browser.getTitle()) === windowTitle) {
        return true;
      }
    }
    await browser.switchToWindow(currentWindow);
    throw new Error(`Window with title "${windowTitle}" was not found`);
  }
}

export default new spcialPage();
