const world = require('../support/world');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given,When,Then,setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);

    Given('the user opens AC login page', function () {
        return world.login_page.openPage();
    });
    When('the user types his name in username field', function () {
        return world.login_page.typeName('ac2pt5.all37@cch.com');
    });
    When('the user types his password in password field', function () {
        return world.login_page.typePass('password');
    });
    When('the user clicks on LogIn button', function () {
        return world.login_page.clickLogin();
    });
    Then('homepage should be displayed', function () {
       return world.home_page.checkHome();
    });
});