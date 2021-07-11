const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const emp1 = new Employee('Bub', 15, 'email@bub.com');

    expect(emp1.name).toBe('Bub');
    expect(emp1.id).toEqual(expect.any(Number));
    expect(emp1.email).toBe('email@bub.com');
});