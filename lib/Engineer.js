const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        return `<a href=www.github.com/${this.gitHub}>Github Profile</a>`
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;