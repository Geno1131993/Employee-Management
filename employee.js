class Employee{
    constructor(type, id){
        //Handle nulls
        if(type){
        this.type = type;
        }
        else{
            this.type = "N/A";
        }
        if(id){
        this.id = id;
        }
        else{
            this.id = "N/A";
        }
    }


    //Returns job description
    get_job_description(){
        return this.type;
    }


    //Changes job description
    set_job_description(new_description){
        this.type = new_description;
    }


    //Gets employee ID
    get_ID(){
        return this.id;
    }


    //Sets employee ID
    set_ID(new_ID){
        this.id = new_ID;
    }


    print_stats(){
        if(this.id == "N/A" && this.type == "N/A"){
            console.log("This employee has no data -- please correct employee data.");
            return;
        }
        console.log("ID: " + this.id + ", Role Description: " + this.type);
    }
}

module.exports = Employee;