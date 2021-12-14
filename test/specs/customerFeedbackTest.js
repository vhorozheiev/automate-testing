import contactPage from "../../page/contact.page.js";
import mainPage from "../../page/main.page.js";
import socialPage from "../../page/social.page.js";

describe("Customer feedback", () => {
  it("should to add customer feedback with rating 3", async () => {
    //let target = $("div.mat-slider-ticks-container");
    await mainPage.open(`http://localhost:3000/#/`);
    await socialPage.openSideNav();
    await contactPage.openFeedback();
    await contactPage.writeComment("asdas");
    await contactPage.setRating({ x: 0, y: 0 }, 1);
    await contactPage.getCaptchResult();
    await contactPage.clickSubmit();
    //need to fix
    await expect (contactPage.thankYouForFeedbackIsDisplayed()).toBeDisplayed();
  });
});
