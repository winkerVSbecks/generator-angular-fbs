'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularUtils = require('../util.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
  this.hookFor('angular-fbs:controller');
  this.hookFor('angular-fbs:view');
};

util.inherits(Generator, ScriptBase);

Generator.prototype.rewriteAppJs = function () {
  var coffee = this.env.options.coffee;
  var config = {
    file: path.join(
      this.env.options.appPath,
      'app.' + (coffee ? 'coffee' : 'js')
    ),
    needle: '.otherwise',
    splicable: [
      "  templateUrl: '" + this.name.toLowerCase() + "/index.html'" + (coffee ? "" : "," ),
      "  controller: '" + this.classedName + "Ctrl'"
    ]
  };

  if (coffee) {
    config.splicable.unshift(".when '/" + this.name + "',");
  }
  else {
    config.splicable.unshift(".when('/" + this.name + "', {");
    config.splicable.push("})");
  }

  angularUtils.rewriteFile(config);
};