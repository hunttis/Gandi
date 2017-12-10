// Generated by Haxe 3.4.4
if (process.version < "v4.0.0") console.warn("Module " + (typeof(module) == "undefined" ? "" : module.filename) + " requires node.js version 4.0.0 or higher");
(function () { "use strict";
Math.__name__ = true;
var Server = function() {
	var app = new js_npm_Express();
	app.set("port",3000);
	app["use"](new js_npm_express_Favicon(__dirname + "/public/favicon.ico"));
	var tmp = js_npm_express_BodyParser.urlencoded();
	app["use"](tmp);
	var tmp1 = js_node_Path.join(__dirname,"public");
	app["use"](new js_npm_express_Static(tmp1));
	app.get("/",function(req,res) {
		res.sendfile(__dirname + "/public/index.html");
	});
	app["use"](function(req1,res1,next) {
		res1.status(404).send("404");
	});
	var tmp2 = app.get("port");
	app.listen(tmp2,function() {
		console.log("Express server listening on port " + Std.string(app.get("port")));
	});
};
Server.__name__ = true;
Server.main = function() {
	var main = new Server();
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_io_Bytes = function() { };
haxe_io_Bytes.__name__ = true;
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_node_Path = require("path");
var js_node_buffer_Buffer = require("buffer").Buffer;
var js_npm_Express = require("express");
var js_npm_express_BodyParser = require("body-parser");
var js_npm_express_Favicon = require("serve-favicon");
var js_npm_express_Static = require("express").static;
String.__name__ = true;
Array.__name__ = true;
Server.main();
})();
