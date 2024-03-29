const Intern = require('../lib/Intern');

test('is intern an object?',() => {
    const intern = new Intern ();

    expect(typeof(intern)).toBe('object');
});


test('is intern object created with info needed', () => {
    const name = 'John';
    const id = 15;
    const email = 'john@john.com';
    const school = 'Yale';
    const intern = new Intern(name, id, email, school);

    expect(intern.name).toBe(name);

    expect(intern.id).toBe(id);
    expect(intern.id).toEqual(expect.any(Number));

    expect(intern.email).toBe(email);
    expect(intern.email).toEqual(expect.stringContaining('@'));
    
    expect(intern.school).toBe(school)
});

test('does get role pull Intern',() => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});