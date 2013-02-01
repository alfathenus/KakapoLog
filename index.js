var kakapolog = require("./lib/kakapoLog.js");
var consoleHandler = require("./lib/handlers/ConsoleHandler.js");
var abstractHandler = require("./lib/handlers/ConsoleHandler.js");
var nullHandler = require("./lib/handlers/ConsoleHandler.js");



if(typeof module == 'object') {
   exports = module.exports = {
   		"KakapoLog"			: kakapolog,
   		"ConsoleHandler" 	: consoleHandler,
   		"AbstractHandler"	: abstractHandler,
   		"NullHandler"		: nullHandler
   	}
}
