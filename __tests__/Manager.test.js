const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const emp1 = new Manager('Bub', 15, 'email@bub.com', 4164155000);

    expect(emp1.name).toBe('Bub');
    expect(emp1.id).toEqual(expect.any(Number));
    expect(emp1.email).toBe('email@bub.com');
    expect(emp1.officeNum).toEqual(expect.any(Number));
});