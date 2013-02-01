
var util = require("util");

function AbstractHandler () {
	self = this;
}

AbstractHandler.prototype.trace = function trace() {
	throw new Error("AbstractHandler:trace is abstract");
}

AbstractHandler.prototype.debug = function debug() {
	throw new Error("AbstractHandler:debug is abstract");
}

AbstractHandler.prototype.info = function info() {
	throw new Error("AbstractHandler:info is abstract");
}
AbstractHandler.prototype.warn = function warn() {
	throw new Error("AbstractHandler:warn is abstract");
}
AbstractHandler.prototype.error = function error() {
	throw new Error("AbstractHandler:error is abstract");
}
AbstractHandler.prototype.fatal = function fatal() {
	throw new Error("AbstractHandler:fatal is abstract");
}

//DATE TIME MACHINE-NAME PROGRAM-NAME[PID]: MESSAGE
AbstractHandler.prototype.format = function format(type, msj) {
	var s = "";
	var type = type || "type";
	var msj = msj || "";
	var now = new Date();
	var d = now.getDate();
    var m = now.getMonth()+1;
    var y = now.getFullYear();
    var date = '' + y +'/'+ (m<=9?'0'+m:m) +'/'+ (d<=9?'0'+d:d);
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var time = h + ":" + m +":" + s;

    var moment = date + " " + time + process.pid;


	return util.format("%s %s [%s] [%s] : %s ", moment, process.argv[1], process.pid, type, msj);
}

// If I run it form Node
if(typeof module == 'object') {
   exports = module.exports = AbstractHandler;
}
