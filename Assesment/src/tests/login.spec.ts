// src/login.spec.ts

import { Builder, Capabilities, WebDriver  } from 'selenium-webdriver';
import { expect } from 'chai';
import 'mocha';
import { LoginPage } from '../pages/LoginPage';

describe('Login Page', () => {
  let driver: WebDriver ;
  let loginPage: LoginPage;

  before(async () => {
    const chromeCapabilities = Capabilities.chrome();
    const options = {
      args: ['--headless', '--disable-gpu']
    };
    chromeCapabilities.set('goog:chromeOptions', options);
    driver = await new Builder().withCapabilities(chromeCapabilities).build();
    loginPage = new LoginPage(driver);
  });

  after(async () => {
    await driver.quit();
  });

  const testData = [
    {
      baseUrl: 'https://commerceos.staging.devpayever.com/registration/fashion',
      firstName: 'Michel',
      lastName: 'Jordan',
      email: 'micherJordan768@gmail.com',
      password: 'Michel@12',
    },
    {
      baseUrl: 'https://commerceos.staging.devpayever.com/registration/santander',
      firstName: 'Breon',
      lastName: 'Melson',
      email: 'BreonMelson@gmail.com',
      password: 'Breon@12',
    },
  ];

  testData.forEach((data) => {
    it(`should log in with valid credentials for ${data.baseUrl}`, async () => {
      await driver.get(data.baseUrl);
      await loginPage.enterFirstName(data.firstName);
      await loginPage.enterLastName(data.lastName);
      await loginPage.enterEmail(data.email);
      await loginPage.enterPassword(data.password);
      await loginPage.enterConfirmPass(data.password)

      // Perform assertions to verify successful login or other expected behavior
      // For example, check if the user is logged in and their name is displayed
    //   const loggedInUserName = await loginPage.getLoggedInUserName();
    //   expect(loggedInUserName).to.contain(data.firstName);
    });
  });

  // Add more test cases as needed
});
