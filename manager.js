const Employee = require("./employee");


class Manager extends Employee{
    constructor(id, office_number){
        super("Manager", id);
        if(office_number){
            this.office_number = office_number;
        }
        else{
            this.office_number = "N/A";
        }

        this.print_stats();


    }

}



module.exports = Manager;





