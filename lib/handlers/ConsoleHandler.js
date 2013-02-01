var abstractHandler = require("./AbstractHandler.js");
var util = require("util");

function ConsoleHandler () {
	abstractHandler.call(this);
	self = this;
}

util.inherits (ConsoleHandler, abstractHandler);

ConsoleHandler.prototype.trace = function (msj) {
	console.log(self.format("TRACE", msj));
}

ConsoleHandler.prototype.debug = function (msj) {
	console.log(self.format("DEBUG", msj));
}

ConsoleHandler.prototype.info = function (msj) {
	console.info(self.format("INFO", msj));
}

ConsoleHandler.prototype.warn = function (msj) {
	console.warn(self.format("WARNING", msj));
}
ConsoleHandler.prototype.error = function (msj) {
	console.error(self.format("ERROR", msj));
}
ConsoleHandler.prototype.fatal = function (msj) {
	console.error(self.format("FATAL", msj));
}

// If I run it form Node
if(typeof module == 'object') {
   exports = module.exports = ConsoleHandler;
}
