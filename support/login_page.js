'use strict';
var nameField = element(by.id('username'));
var passField = element(by.id('password'));
var loginButton = element(by.className('wk-button-primary wk-button-full'));


class Login {
    constructor(){
        this.url = 'http://www.answerconnect.stg.cch.com/?forcestandardlogin#/home';
        this.openPage = function() {
            return browser.get(this.url);
        };
        this.typeName = function(value){
            return nameField.sendKeys(value);
        };
        this.typePass = function(value){
            return passField.sendKeys(value);
        };
        this.clickLogin = function(){
            return loginButton.click();
        };
    }
}

module.exports = Login;