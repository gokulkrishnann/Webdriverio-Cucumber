const { Given,When,Then } = require('cucumber');
const login = require('../pages/login.page.js');

Given(/^I open Application$/, () => {
   login.open();
});

When(/^I enter username (.*)$/, (username) => {
    login.enterUsername(username);
});


When(/^I enter password (.*)$/, (password) => {
    login.enterPassword(password);
});

Then(/^I click login$/, () => {
    login.clickLogin();
});

Then(/^I verify page title (.*)$/, (title) => {
    login.assertPageTitle(title);
});

Then(/^I verify error message (.*)$/, (message) => {
    login.assertErrorMessage(message);
});

