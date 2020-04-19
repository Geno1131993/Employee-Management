const Employee = require("./employee");

class Engineer extends Employee{
    constructor(id, github){
        super("Engineer", id);
        this.set_ID(id);
        this.github = github;
        this.set_job_description("No job description defined.");
        this.print_stats();
    }
}

module.exports = Engineer;