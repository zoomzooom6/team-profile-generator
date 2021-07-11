//create the Manager card
const generateMan = data => {
    return `
    <section class="my-3" id="portfolio">
      <h3 class="text-dark bg-primary p-2 display-inline-block">${data.name}</h3>
      <h3 class="text-dark bg-primary p-2 display-inline-block">${data.constructor.name}</h3>
      <div class="flex-row justify-space-between">
          <div class="col-12 mb-2 bg-dark text-light p-3">
            ID: ${data.id}
          </div>
          <div class="col-12 mb-2 bg-dark text-light p-3">
            Email: <a href="${data.email}">${data.email}</a>
          </div>
          <div class="col-12 mb-2 bg-dark text-light p-3">
            Office number: ${data.officeNum}
          </div>
        </div>
    </section>
  `;
};

//create Engineer cards
const generateEngi = data => {
    return `
    <section class="my-3" id="portfolio">
      <h3 class="text-dark bg-primary p-2 display-inline-block">${data.name}</h3>
      <h3 class="text-dark bg-primary p-2 display-inline-block">${data.constructor.name}</h3>
      <div class="flex-row justify-space-between">
          <div class="col-12 mb-2 bg-dark text-light p-3">
            ID: ${data.id}
          </div>
          <div class="col-12 mb-2 bg-dark text-light p-3">
            Email: <a href="${data.email}">${data.email}</a>
          </div>
          <div class="col-12 mb-2 bg-dark text-light p-3">
            Github: <a href="${data.github}">${data.github}</a>
          </div>
        </div>
    </section>
  `;
};

//create Intern cards
const generateInt = data => {
    return `
    <section class="my-3" id="portfolio">
      <h3 class="text-dark bg-primary p-2 display-inline-block">${data.name}</h3>
      <h3 class="text-dark bg-primary p-2 display-inline-block">${data.constructor.name}</h3>
      <div class="flex-row justify-space-between">
          <div class="col-12 mb-2 bg-dark text-light p-3">
            ID: ${data.id}
          </div>
          <div class="col-12 mb-2 bg-dark text-light p-3">
            Email: <a href="${data.email}">${data.email}</a>
          </div>
          <div class="col-12 mb-2 bg-dark text-light p-3">
            School: ${data.school}
          </div>
        </div>
    </section>
  `;
};

module.exports = templateData => {
    console.log(templateData);

    const { Manager, Engineer, Intern, ...header } = templateData;

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
          </div>
        </header>

        <main class="container my-5">
            ${generateMan(Manager)}
            ${generateEngi(Engineer)}
            ${generateInt(Intern)}
        </main>
    </body>
    </html>
    `;
};