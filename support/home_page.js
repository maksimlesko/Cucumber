var navBar = element(by.className('wk-navbar-container'));
var searchField = element(by.model('query'));
var EC = protractor.ExpectedConditions;
var pressEnter = protractor.Key.ENTER;


class homePage {
    constructor(){

        this.typeSearch = function (value) {
            return searchField.sendKeys(value);
        };
        this.runSearch = function(){
            return searchField.element(by.css('.wk-icon-search')).click();
        };
        this.checkHome = function(){
            return browser.wait(EC.visibilityOf(searchField),15000);
        };

        this.waitFor = function(value){
             return browser.wait(EC.visibilityOf(value), 15000);
        };
        }
    };

module.exports = homePage;