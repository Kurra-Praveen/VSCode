import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
import { SearchPage } from "./pages/loginPage";
import { readConfig } from "./utilities/configReader";

async function main() {
  try {
    const config = await readConfig();
    const chromeOptions = Capabilities.chrome();
    // Uncomment the line below if you want to run in headless mode
    // chromeOptions.set('args', ['--headless']);

    const driver: WebDriver = await new Builder()
      .forBrowser("chrome")
      .withCapabilities(chromeOptions)
      .build();

    const searchPage = new SearchPage(driver);

    await driver.get(config.baseUrl);
    await searchPage.enterSearchQuery(config.searchQuery);
    await searchPage.clickSearchButton();

    const isTitleFound = await searchPage.waitForPageTitleContains(config.searchQuery);

    if (isTitleFound) {
      const pageTitle = await driver.getTitle();
      console.log("Page Title:", pageTitle);
    } else {
      console.log("Page title not found.");
    }

    await driver.quit();
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

main();
