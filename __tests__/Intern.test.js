const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const emp1 = new Intern('Bub', 15, 'email@bub.com', 'McMaster');

    expect(emp1.name).toBe('Bub');
    expect(emp1.id).toEqual(expect.any(Number));
    expect(emp1.email).toBe('email@bub.com');
    expect(emp1.school).toBe('McMaster');
});