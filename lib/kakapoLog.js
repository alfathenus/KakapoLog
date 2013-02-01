var consoleHandler = require("./handlers/ConsoleHandler.js");
var abstractHandler = require("./handlers/AbstractHandler.js");
var nullHandler = require("./handlers/NullHandler.js");

/**
Constuctor
@param handler Default Handler for the Logger.

@see ./handlers/ConsoleHandler.js
@see ./handlers/AbstractHandler.js
*/
function Kakapo (handler) {
	this._defaultHandler = new consoleHandler();
	if ( handler instanceof abstractHandler ) {
		this.defaultHandler = handler;
	}
	this._handlers = [];
}

/**
Adds a new Handler to the stack
*/
Kakapo.prototype.addHandler = function(value) {
	if ( value instanceof abstractHandler ) {
		this._handlers.push(value);
	}
}

/**
Execute all stacked handlers
@param funcName Name of the function that we want to log
@param msj Text to want to log
*/
Kakapo.prototype.executeHandlers = function(funcName, msj) {
	if ( this._handlers != null && this._handlers instanceof Array) {
		this._handlers.forEach(function (item) {
	        item[funcName](msj);
	    });
	}
}

/**
Create loggin methods
*/
var items=["debug","trace","info","warn","error","fatal"];
items.forEach(function(item) {
	Kakapo.prototype[item] = function (msj) {
		this._defaultHandler.debug(msj);
		this.executeHandlers(item, msj);
	}
});

// If I run it form Node
if(typeof module == 'object') {
   exports = module.exports = Kakapo;
}
