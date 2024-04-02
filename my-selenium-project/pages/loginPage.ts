import { By, WebDriver, WebElement } from "selenium-webdriver";

export class SearchPage {
  private readonly driver: WebDriver;
  private readonly firstName: By = By.xpath("//input[@formcontrolname='firstName']")
  private readonly lastName: By = By.xpath("//input[@formcontrolname='lastName']")
  private readonly email: By = By.xpath("//input[@formcontrolname='email']")
  private readonly password: By = By.xpath("//input[@formcontrolname='password']")
  private readonly confirmPass: By = By.xpath("//input[@formcontrolname='confirmPass']")
  private readonly signUpBtn:By=By.xpath("//button[@class='signup-button']")

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  private async findElement(locator: By): Promise<WebElement> {
    return this.driver.findElement(locator);
  }

  async enterFirstName(query: string): Promise<void> {
    const searchInput = await this.findElement(this.firstName);
    await searchInput.sendKeys(query);
  }


  async enterLastName(query: string): Promise<void> {
    const searchInput = await this.findElement(this.lastName);
    await searchInput.sendKeys(query);
  }

  async enterEmail(query: string): Promise<void> {
    const searchInput = await this.findElement(this.email);
    await searchInput.sendKeys(query);
  }

  async enterPassword(query: string): Promise<void> {
    const searchInput = await this.findElement(this.password);
    await searchInput.sendKeys(query);
  }

  async enterConfirmPass(query: string): Promise<void> {
    const searchInput = await this.findElement(this.confirmPass);
    await searchInput.sendKeys(query);
  }


  async clickSignUpButton(): Promise<void> {
    const searchButton = await this.findElement(this.signUpBtn);
    await searchButton.click();
  }

  async waitForPageTitleContains(text: string): Promise<boolean> {
    try {
      await this.driver.wait(() => this.driver.getTitle().then(title => title.includes(text)), 5000);
      return true;
    } catch (error) {
      return false;
    }
  }
}
