import contactPage from "../../page/contact.page.js";
import mainPage from "../../page/main.page.js";
import socialPage from "../../page/social.page.js";

describe("Customer feedback", () => {
  it("should to add customer feedback with rating 3", async () => {
    await mainPage.open(`http://localhost:3000/#/`);
    await socialPage.openSideNav();
    await contactPage.openFeedback();
    await contactPage.writeComment("asdas");
    await contactPage.setRating({ x: 0, y: 0 }, 1);
    await contactPage.getCaptchResult();
    await contactPage.clickSubmit();
    //check thar rating equal to 3
    await expect(contactPage.ratingSlider).toHaveAttributeContaining("aria-valuenow", "3");
    await expect(contactPage.thankYouForFeedback).toBeDisplayed();
  });
});
