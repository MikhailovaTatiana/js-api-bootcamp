console.log('Hi!');

// #1
fetchPokemons();
async function fetchPokemons() {
    try {
        let resp = await fetch('https://majazocom.github.io/Data/pokemons.json');
        let data = await resp.json();
        console.log(data);
        data.forEach(element => {
            document.body.innerHTML += `${element.name}<br>`;
        });
    } catch(e) {
        console.log(e);
    };
};

// #2
fetchDogs();
async function fetchDogs() {
    try {
        let resp = await fetch('https://majazocom.github.io/Data/dogs.json');
        let data = await resp.json();
        console.log(data);
        data.forEach(element => {
            document.body.innerHTML += `${element.name}<br>`;
        });
    } catch(e) {
        console.log(e);
    };
};

// #3
fetchBooks();
async function fetchBooks() {
    try {
        let resp = await fetch('https://majazocom.github.io/Data/books.json');
        let data = await resp.json();
        console.log(data);
        data.forEach(element => {
            if (element.pages < 500) {
                document.body.innerHTML += `${element.title} - ${element.pages}<br>`;
            }
        });
    } catch(e) {
        console.log(e);
    };
};

// #4
fetchVisitors();
async function fetchVisitors() {
    try {
        let resp = await fetch('https://majazocom.github.io/Data/attendees.json');
        let data = await resp.json();
        console.log(data);
        data.forEach(element => {
            if (element.attending === true) {
                document.body.innerHTML += `${element.name} - attending: ${element.attending}<br>`;
            }
        });
        data.forEach(element => {
            if (element.allergies.length !== 0) {
                document.body.innerHTML += `${element.name} - allargies: ${element.allergies}<br>`;
            }
        });
    } catch(e) {
        console.log(e);
    };
};