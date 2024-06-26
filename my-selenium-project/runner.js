"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = require("selenium-webdriver");
require("chromedriver"); // Make sure you have chromedriver installed in your system and it's available in the PATH.
function automateWebsite() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, searchBox, pageTitle, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new selenium_webdriver_1.Builder().forBrowser('chrome').build()];
                case 1:
                    driver = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 8, 9, 11]);
                    // Navigate to the website you want to automate.
                    return [4 /*yield*/, driver.get('https://www.example.com')];
                case 3:
                    // Navigate to the website you want to automate.
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('q'))];
                case 4:
                    searchBox = _a.sent();
                    return [4 /*yield*/, searchBox.sendKeys('Hello, automation!', selenium_webdriver_1.Key.RETURN)];
                case 5:
                    _a.sent();
                    // Wait for the results to load.
                    return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.titleContains('Hello, automation!'), 5000)];
                case 6:
                    // Wait for the results to load.
                    _a.sent();
                    return [4 /*yield*/, driver.getTitle()];
                case 7:
                    pageTitle = _a.sent();
                    console.log('Page title:', pageTitle);
                    return [3 /*break*/, 11];
                case 8:
                    error_1 = _a.sent();
                    console.error('Error occurred:', error_1);
                    return [3 /*break*/, 11];
                case 9: 
                // Quit the WebDriver once the automation is done.
                return [4 /*yield*/, driver.quit()];
                case 10:
                    // Quit the WebDriver once the automation is done.
                    _a.sent();
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
}
automateWebsite();
