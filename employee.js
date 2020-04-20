class Employee{
    constructor(name, type, id){
        //Handle nulls
        this.job_description = "No job description.";
        this.name = "N/A";
        this.email = "N/A";
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
        if(new_description){
            this.job_description = new_description;
        }
        else{
            this.invalid();
        }
    }


    //Returns employee job type
    get_type(){
        return this.type;
    }

    //Changes employee job type
    set_type(new_type){
        if(new_type){
            this.type = new_type;
        }
        else{
            this.invalid();
        }
    }


    //Gets employee ID
    get_ID(){
        return this.id;
    }


    //Sets employee ID
    set_ID(new_ID){
        if(new_ID){
            this.id = new_ID;
        }
        else{
            this.invalid();
        }
    }


    //Gets employee's name
    get_name(){
        return this.name;
    }



    //Sets employee's name
    set_name(new_name){
        if(new_name){
            this.name = new_name;
        }
        else{
            this.invalid();
        }
    }


    //Gets employee's email
    get_email(){
        return this.email;
    }


    //Sets employee's email
    set_email(new_email){
        if(new_email){
            this.email = new_email;
        }
        else{
            this.invalid();
        }
    }


    print_stats(){
        if(this.id == "N/A" && this.type == "N/A"){
            console.log("This employee has no data -- please correct employee data.");
            return;
       }
        console.log("Employee Name: " + this.name + "\nID: " + this.id + "\nRole: " + this.type + "\nRole Description: " + this.job_description + "\nEmail: " + this.email);
    }

    invalid(){
        console.log("What you have entered is invalid -- please try again.");
    }




}

module.exports = Employee;