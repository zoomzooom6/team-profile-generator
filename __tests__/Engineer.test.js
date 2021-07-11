const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const emp1 = new Engineer('Bub', 15, 'email@bub.com', 'zoomzooom6');

    expect(emp1.name).toBe('Bub');
    expect(emp1.id).toEqual(expect.any(Number));
    expect(emp1.email).toBe('email@bub.com');
    expect(emp1.gitHub).toBe('zoomzooom6');
});