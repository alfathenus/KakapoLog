var kakapo = require("../../../lib/kakapoLog.js");

var aTest = function () {
	this.World = require("../support/world.js").World;

	this.givenNumber = 0;

	/*this.Given(/^a variable set to (\d+)$/, function(number, next) {
		this.givenNumber = parseInt(number);
		next();
	});

	this.When(/^I increment the variable by (\d+)$/, function (number, next) {
		this.givenNumber = this.givenNumber + parseInt(number);
		next();
	});

	this.Then(/^the variable should contain (\d+)$/, function (number, next) {
		if (this.givenNumber != number)
			throw(new Error("This test didn't pass, givenNumber is " + this.givenNumber + " expected 0"));
		next();
	});*/

	//Scenario 2
	this.msjDebugEvent = "";
	this.logs = new kakapo();
	this.Given(/^a debug event$/, function(next) {
		this.msjDebugEvent = "hola"
		next();
	});

	this.When(/^I excute debug function$/, function (next) {
		this.logs.debug("hola");
		next();
	});

	this.Then(/^execute all handlers$/, function ( next) {
		
		next();
	});

};

module.exports = aTest;