var assert =  require('chai').assert;
var sfdx = require('../');

describe('sfdx', function() {
    it('should have object \'org\'', function(){
        assert.isObject(sfdx.org);
    })
    describe('org', function(){
        it('should have function \'list\'', function() {
            assert.isFunction(sfdx.org.list);
        });
        it('should have function \'open\'', function() {
            assert.isFunction(sfdx.org.open);
        });
    })
});
