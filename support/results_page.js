var home_page = require('./home_page');
var wkButton = element(by.css('.single-action .document-action'));
var EC = protractor.ExpectedConditions;

class results {
    constructor(){
        this.waitForRes = function(){
            return browser.wait(EC.visibilityOf(wkButton), 15000);
        };
        };

    }


module.exports = results;