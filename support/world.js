const loginPage = require('./login_page');
const homePage = require('./home_page');
const Results = require('./results_page');

class World{
    constructor(){
        this.login_page = new loginPage();
        this.home_page = new homePage();
        this.results_page = new Results();
}
}

module.exports = new World();