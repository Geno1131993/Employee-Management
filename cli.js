const Engineer = require ("./engineer");
const Intern = require ("./intern");
const Manager = require("./manager");
const Employee = require("./employee");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const write = util.promisify(fs.writeFile);
const employees = [];
var finished = false;


console.log("Welcome to the Employee Roster Management!");



function prompt(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Employee name: "
        },

        {   
            type: "input",
            name: "id",
            message: "Employee ID: "
        },
        {
            type: "list",
            message: "Employee type:",
            name: "emp_type",
            choices: [
                "Intern",
                "Engineer",
                "Manager"
            ]
        },
        {
            type: "input",
            name: "email",
            message: "What is employee's email address? "
        }



    ]);
}


function done(){
    return inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another employee to the roster?",
            name: "finished",
            choices: [
                "Yes",
                "No"
            ]
        }
    ]);
}


function intern(){
    return inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What school is the intern attending? "

        }
    ]);
}


function prompt_done(){
    done().then(function(fin){

        if(fin["finished"] == "Yes"){
            prompt_user();
        }
    }).catch(function(err){
        console.log(err);
    });

}

function prompt_intern(){
    intern().then(function(intern){
        console.log(intern);
    }).catch(function(err){
        console.log(err);
    });
}




function prompt_user(){
    prompt().then(function(response) {
        console.log(response);
        var e = new Employee();
         if(response["emp_type"] == "Intern"){
             //"School" isn't supported yet -- having issues with asynchronous operations
            e = new Intern(response["id"]);
         }
         if(response["emp_type"] == "Manager"){
             //"Office phone" isn't supported yet -- having issues with asynchronous operations
            e = new Manager(response["id"]);
        }
        if(response["emp_type"] == "Engineer"){
            //"GitHub" isn't supported yet -- having issues with asynchoronous operations
            e = new Engineer(response["id"]);
        }
        
        e.set_email(response["email"]);
        e.set_name(response["name"]);

        prompt_done();
    }).then(function(){
        console.log(employees);   
    }).catch(function(err){
        console.log(err);
    });
}


prompt_user();


function build_html(name, id, type, job_description){
    const html = `
        <!DOCTYPE html>
        <html lang = "en">
        <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">

        <head>
            <title>
             Employee Roster
            </title>
        </head>



        <body>
         <div id = "header">
                <nav class = "level">
                    <div class = "level-left">
                        <div class = "level-item">
                            <p id = "logo"> Employee Roster </p>
                        </div>

                    </div>

                    <div class = "level-right">
                        <div class = "level-item">

                        </div>
                 </div>
                </nav>
            </div>

            `;



         `</body>


    </html>`;
}






