import { Test, BeforeTest, AfterTest } from "testng";
import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
import { SearchPage } from "../pages/SearchPage";
import { readConfig } from "../utilities/configReader";

let driver: WebDriver;

@BeforeTest
async function setup(): Promise<void> {
  const config = await readConfig();
  const chromeOptions = new Capabilities.chrome();
  // Uncomment the line below if you want to run in headless mode
  // chromeOptions.set('args', ['--headless']);

  driver = await new Builder()
    .forBrowser("chrome")
    .withCapabilities(chromeOptions)
    .build();
}

@Test
async function searchTest(): Promise<void> {
  const config = await readConfig();
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
}

@AfterTest
async function teardown(): Promise<void> {
  if (driver) {
    await driver.quit();
  }
}
