const packageTwo = require('../lib/package-two');
const packageOne = require('../../package-one/lib/package-one');

test('test-package-two', () => {
  expect(packageTwo(packageOne)).toEqual('The total is 26');
});
