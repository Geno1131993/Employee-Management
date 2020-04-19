const Employee = require("./employee");

class Engineer extends Employee{
    constructor(id, github){
        super("Engineer", id);
        this.set_ID(id);
        if(github){
            this.set_github(github);
        }
        else{
            this.set_github("No GitHub info on file.");
        }

        this.print_stats();
    }

    //Returns engineer's stored GitHub name
    get_github(){
        return this.github;
    }


    //Sets engineer's GitHub name
    set_github(new_github){
        if(new_github){
            this.github = new_github;
        }
        else{
            this.invalid();
        }
    }


    //Print user's stats -- overrides parent's function
    print_stats(){
        super.print_stats();
        console.log("GitHub: " + this.get_github() + "\n");
    }
}

module.exports = Engineer;