exports.config = {
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },

    specs: [
        'features/*.feature'
    ],

    baseURL: 'http://www.answerconnect.stg.cch.com/?forcestandardlogin#/home',

    cucumberOpts: {
        require: [
            'step_definitions/*.js',
            'support/world.js'
        ],
        format: 'pretty',
        keepAlive: false,
        tags: ['@important']
    },
    onPrepare: function () {
        browser.manage().window().maximize();
    }
};