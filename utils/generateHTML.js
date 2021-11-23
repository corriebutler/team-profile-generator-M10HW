const Engineer = require("../lib/Engineer");

function generateManager(manager) {
    return `
        <div class="card" style="width: 20rem;">
            <div class="card-header bg-primary text-white fs-4">
                ${manager.getName()} 
                <br><i class="fas fa-briefcase"></i> Manager </br>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID Number: ${manager.getId()} </li>
                <li class="list-group-item">Email Address: ${manager.getEmail()} </li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
            </ul>
        </div>
    `
}

function generateIntern(intern) {
    // HTML for the Intern Card
    return `<div class="card" style="width: 20rem;">
        <div class="card-header bg-primary text-white fs-4">
            ${intern.getName()}
            <br><i class="fas fa-graduation-cap"></i> Intern </br>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID Number: ${intern.getId()} </li>
            <li class="list-group-item">Email Address: ${intern.getEmail()} </li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
    `
}

function generateEngineer(engineer) {
    // HTML for the Engineer Card
    return `<div class="card" style="width: 20rem;">
    <div class="card-header bg-primary text-white fs-4">
        ${engineer.getName()}
        <br><i class="fas fa-laptop-code"></i> Engineer</br>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID Number: ${engineer.getId()} </li>
        <li class="list-group-item">Email Address: ${engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
    </ul>
</div>`
};

function generateTeam(teamMembers) {
    const html = [];
    for (const member of teamMembers) {
        switch (member.getRole()) {
            case "Manager":
                html.push(generateManager(member))
                break;
            case "Engineer":
                html.push(generateEngineer(member))
                break;
            default:
                html.push(generateIntern(member))
                break;
        }
    };
    return html.join(``);
};

module.exports = teamMembers => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <title>Team Portfolio</title>
    </head>
    <body>
        <header class="container bg-danger text-white d-flex justify-content-center p-4">
            <div class="row">
                <h1>
                    Team Profiles
                </h1>
            </div>
        </header>
        <div class="container card-deck d-flex flex-wrap justify-content-between">
            <div class="card-deck d-flex flex-wrap">
                ${generateTeam(teamMembers)}
            </div>
        </div>
    </body>`
};

