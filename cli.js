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



async function prompt(){
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
        },
        {
            type: "input",
            name: "job_description",
            message: "What is the employee's job description? "
        }




    ]);
}


async function done(){
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



//Not currently supported
async function intern(){
    return inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What school is the intern attending? "
        }
    ]);
}



async function prompt_done(){
    done().then(async function(fin){
        if(fin["finished"] == "Yes"){
            prompt_user();
        }
    }).catch(async function(err){
        console.log(err);
    });

}


//Not currently supported
async function prompt_intern(){
    intern().then(async function(intern){
        console.log(intern);
    }).catch(async function(err){
        console.log(err);
    });
}




async function prompt_user(){
    prompt().then(async function(response) {
        console.log(response);
        var e = new Employee();

        if(response["emp_type"] == "Intern"){
             //"School" isn't supported yet -- having issues with asynchronous operations
            e = new Intern(response["id"]);
            //prompt_intern();
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
        e.set_job_description(response["job_description"]);
        employees.push(e);
        prompt_done();

    }).then(async function(){
        // console.log(employees);  
        fs.writeFile("./templates/main.html", build_html(), function(err){
            if(err){
                console.log(err);
            }
        });
         
    }).catch(function(err){
        console.log(err);
    });
}


prompt_user();


async function write_to_html(html){
    fs.writeFile("./templates/main.html", html, function(err){
        if(err){
            return console.log(err);
        }
        console.log("Check html output.");
    });


}



async function build_html(){
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

            <div class = "tile is-ancestor">
            <div id = "roster" class = "tile is-vertical is-10">
                <div class = "tile is-parent"></div>

            `;



        for(let i = 0; i < employees.length; i++){
            html += `

                        <div class = "tile is-child">
                           <div class = "tile is-horizontal is-2">
                            <div class = "tile is-parent">
                                ${employees[i]["name"]}
                            <div>
                                <div class = "tile is-child">
                                    <ul>
                                        <li> ID: ${employees[i]["id"]} </li>
                                        <li> ${employees[i]["type"]} </li>
                                        <li> ${employees[i]["job_description"]} </li>
                                    </ul>
                                </div>
                           </div>
                       
             `;
        }
    


    html += `</div></div></div></body></html>`;
    return html;
}






