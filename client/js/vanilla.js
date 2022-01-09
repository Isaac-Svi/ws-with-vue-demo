// 1) loop through the data
// 2) create an element for each piece of data
// 3) append each element to entry point

// this function expects an object with an id and name as a parameter
// we can therefore extract the id and name in the definition of the function itself
// like this: ({ id, name })
const generateHTML = ({ id, name }) => {
    // return `
    //     <div class="card" id="user-${id}">
    //         Username: ${name}
    //     </div>
    // `;
    const card = document.createElement('div');
    card.id = `user-${id}`;
    card.className = 'card';
    card.innerText = `Username: ${name}`;
    card.addEventListener('click', () => alert(`hi ${name}`));

    return card;
};

// global variable, our entry point for javascript
const entryPoint = document.getElementById('app');

// now we can loop through data and insert html generated from the data into entry point
for (let i = 0; i < users.length; i++) {
    app.append(generateHTML(users[i]));
    // app.innerHTML += generateHTML(users[i]);
}
