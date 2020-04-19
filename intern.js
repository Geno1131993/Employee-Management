const Employee = require("./employee");


class Intern extends Employee{
    constructor(id, school){
        super("Intern", id);
        if(school){
            this.school = school;
        }
        else{
            this.school = "N/A";
        }
    }


    get_school(){
        return this.school;
    }


    set_school(new_school){
        if(new_school){
            this.school = new_school;
        }
        else{
            this.invalid();
        }
    }



    print_stats(){
        super.print_stats();
        console.log("School: " + this.get_school());
    }



}


module.exports = Intern;

