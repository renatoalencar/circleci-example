const { sum } = require('./index')

it('should sum two numers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(4, 6)).toBe(10);
});
