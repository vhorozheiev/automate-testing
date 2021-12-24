import mainPage from "../../../page/main.page.js";
import socialPage from "../../../page/social.page.js";

before(async() =>{
  await mainPage.open(`http://localhost:3000/#/`);
});
describe("Social media links testing", () => {
  it("should open social media link", async () => {
    await socialPage.openSideNav();
    await socialPage.openAboutUs();
    await socialPage.goToFacebook();
    await socialPage.switchWindow(`OWASP Juice Shop - Главная | Facebook`);
    await expect (socialPage.facebookLogoImage).toBeDisplayed();
  });
});
