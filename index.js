var sfdx = require('salesforce-alm')
var _ = require('lodash');

var _optsDefaults = {
    softExit: true
}
var _flagDefaults = {
    quiet: true,
    loglevel: 'fatal'
}
var sfdxApi = {};

var commandsByTopic = _.groupBy(sfdx.commands, 'topic');
_.forEach(commandsByTopic, function(commands, topic){
    var sfdxTopic = sfdxApi[topic] = {};
    _.forEach(commands, function(command){
        sfdxTopic[_.camelCase(command.command)] = _createCommand(command.run);
    })
});

function _createCommand(fn){
    return function(flags, opts){
        var ctx = _.defaults(opts || {}, _optsDefaults);
        ctx.flags = _.defaults(flags || {}, _flagDefaults);
        return fn(ctx);
    }
}

module.exports = sfdxApi;