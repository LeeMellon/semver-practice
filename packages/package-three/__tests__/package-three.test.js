
const packageThree = require('../lib/package-three');
const packageTwo = require ('../../package-two/lib/package-two');
test('package-three', () => {
    expect(packageTwo(packageThree)).toEqual('The total is 139')
});
