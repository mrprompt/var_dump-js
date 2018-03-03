const expect = require('expect.js');
const var_dump = require(__dirname + '/../src/index');

describe('var_dump()', function (done) {
    it('var_dump() should return a function', function (done) {
        expect(var_dump).to.be.a.Function;

        done();
    });

    it('var_dump() called with name must be return not empty', function (done) {
        const test = { foo: 'baar' };

        expect(var_dump(test)).to.be.ok;

        done();
    });
});
