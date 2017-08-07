const world = require('../support/world');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given,When,Then,setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);

    Given('the user is on home page', function () {
        return world.home_page.checkHome();
    });

    When('the user types \'Minsk\' search term in the sserach filed', function (){
        return world.home_page.typeSearch('Minsk');
    });

    When('the user clicks \'Search\' icon', function () {
        return world.home_page.runSearch();
    });

    Then('the search must be executed', function () {
        return world.results_page.waitForRes();
    });
});

