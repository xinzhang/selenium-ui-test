require('chromedriver')
var {expect} = require('chai');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

const webDriver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
		.build();
		
defineSupportCode(function({ Given, Then, When }) {
  Given(/^I go to the website "([^"]*)"$/, (url) => {
    webDriver.get(url);
  });
	
	Then(/^I expect the title of the page "([^"]*)"$/, (title) => {		
		webDriver.findElement(seleniumWebdriver.By.tagName('title'))
			.getText()
			.then(x => expect(x).to.be.equal(title));			
	});
	
});