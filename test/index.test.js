const expect = require('expect.js');
const var_dump = require(__dirname + '/../src/index');

describe('var_dump()', function (done) {
    it('var_dump() should return a function', function (done) {
        expect(var_dump).to.be.a.Function;

        done();
    });

    it('var_dump() called with name must be return not empty', function (done) {
        const test = { foo: 'baar' };
        const result = var_dump(test);

        expect(result).to.be.ok;
        expect(result).not.to.be.empty();
        expect(result).to.be.equal('{ foo: \u001b[32m\'baar\'\u001b[39m }');

        done();
    });
});
