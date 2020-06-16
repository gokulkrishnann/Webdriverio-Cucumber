class LoginPage {

    get userNameInput() {
        return $('#session_email')
    }

    get passwordInput() {
        return $('#session_password')
    }

    get loginButton() {
        return $('[data-test="submit"]')
    }

    get errorMessage() {
        return $('[data-test="notice"]')
    }

    open() {
        browser.url("/sign_in")
        browser.setWindowSize(1390, 1150)
    }
    enterUsername(input) {
        this.userNameInput.setValue(input)
    }

    enterPassword(input) {
        this.passwordInput.setValue(input)
    }

    clickLogin() {
        this.loginButton.click()
    }

    assertPageTitle(expectedTitle) {
        expect(browser).toHaveTitle(expectedTitle)
    }

    assertErrorMessage(expectedErrorMessage) {
        this.errorMessage.waitForDisplayed({ timeout: 5000 });
        expect(this.errorMessage).toHaveText(expectedErrorMessage)
    }

}
module.exports = new LoginPage();