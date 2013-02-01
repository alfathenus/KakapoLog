var abstractHandler = require("./AbstractHandler.js");
var util = require("util");

function NullHandler () {
	abstractHandler.call(this);
}

util.inherits(NullHandler, abstractHandler);

NullHandler.prototype.trace = function (msj) {
	//do nothing
}

NullHandler.prototype.debug = function (msj) {
	//do nothing
}

NullHandler.prototype.info = function (msj) {
	//do nothing
}

NullHandler.prototype.warn = function (msj) {
	//do nothing
}
NullHandler.prototype.error = function (msj) {
	//do nothing
}
NullHandler.prototype.fatal = function (msj) {
	//do nothing
}


// If I run it form Node
if(typeof module == 'object') {
   exports = module.exports = NullHandler;
}