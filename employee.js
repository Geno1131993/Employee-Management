class Employee{
    constructor(type, id){
        //Handle nulls
        const job_description = "No job description.";
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
        return this.job_description;
    }


    //Changes job description
    set_job_description(new_description){
        this.job_description = new_description;
    }


    //Returns employee job type
    get_type(){
        return this.type;
    }

    //Changes employee job type
    set_type(new_type){
        this.type = new_type;
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
        console.log("ID: " + this.id + "\nRole: " + this.type + "\nRole Description: " + this.job_description + "\n");
    }
}

module.exports = Employee;