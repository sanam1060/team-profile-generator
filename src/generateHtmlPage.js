// intern card generator function 
function generateIntern(templateData, intern) {
  if (!intern) {
    return "";
  } else if (intern) {
    for (i = 0; i < 1; i++) {
      return `
      <div class="col">
        <div class="card shadow-lg" style="width: 18rem;">
          <div class="card-body identity">
            <h5 class="card-title">${templateData.name}</h5>
            <h6 class="card-title">Engineer</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${templateData.id}</li>
            <li class="list-group-item">Email: <a href="mailto:">${templateData.email}</a></li>
            <li class="list-group-item">School: ${templateData.school}</li>
          </ul>
        </div>
      </div>
      `;
    }
  }
}

// engineer card generator function 
function generateEngineer(templateData, engineer) {
  if (!engineer) {
    return "";
  } else if (engineer) {
    for (i = 0; i < 1; i++) {
      return `
      <div class="col">
        <div class="card shadow-lg" style="width: 18rem;">
          <div class="card-body identity">
            <h5 class="card-title">${templateData.name}</h5>
            <h6 class="card-title">Engineer</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${templateData.id}</li>
            <li class="list-group-item">Email: <a href="mailto:">${templateData.email}</a></li>
            <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${templateData.github}">${templateData.github}</a></li>
          </ul>
        </div>
      </div>
      `;
    }
  }
}

// Generates HTML Page
module.exports = (templateData) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" type="text/css" href="./src/style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main class="container my-5">
        <div class="row">
          <div class="col">
            <div class="card shadow-lg" style="width: 18rem;">
              <div class="card-body identity">
                <h5 class="card-title">${templateData.name}</h5>
                <h6 class="card-title">Manager</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${templateData.id}</li>
                <li class="list-group-item">Email: <a href="mailto:">${templateData.email}</a></li>
                <li class="list-group-item">Office number: ${templateData.officeNumber}</li>
              </ul>
            </div>
          </div>
          ${generateEngineer()}
          ${generateIntern()}
        </div>
      </main>
    </body>
  </html>
  `;
};
