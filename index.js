var reporter = require('./node_modules/cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: './reports/report.json',
        output: './reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true
    };
 
    reporter.generate(options);