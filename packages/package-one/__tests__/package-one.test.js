const packageOne = require('../../package-one/lib/package-one')

test('test-package-one', () => {
  expect(packageOne).toContain(6);
});
