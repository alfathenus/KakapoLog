# KakapoLog (version 0.0.1)

## Overview
Very simle logging system for Node.js. 

This module have borned only to learn Node.js. There are many others modules with more features and tested.

What is a Kakapo? See here: [http://en.wikipedia.org/wiki/Kakapo](http://en.wikipedia.org/wiki/Kakapo)

## Status
Allowed for testing
 
##Examples
Simple use: 
	var kakapo = require("kakapoLog");
	var log = new kakapo.KakapoLog();
	log.debug("Debugging");
	log.info("Info");

Workaround to load the module (it's not in nmp)
	var kakapo = require("./lib/kakapoLog.js");

## Wiki
The wiki has more information about the library [wiki]

## License
[MIT License] (http://opensource.org/licenses/MIT)