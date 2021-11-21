const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/Manager');

test('is manager object created with info needed', () => {
    const e = new Manager('Dave', '15', '12')
});