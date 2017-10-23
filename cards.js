//get element of the container of the cards
var cardParentEl = document.getElementById('cardSection');

//get element of the create button
var createButtonEl = document.getElementById('create');



//create function to add a new div with a button to the card section container
function clickCreate (event) {
    if(event.target.id === 'create') {
        cardParentEl.innerHTML += `<div class='card'><button id='delete'>Delete</button></div>`;
    }
}

//create click event for the create button that adds the clickbutton function
cardParentEl.addEventListener('click', clickCreate);


//create function to delete the delete card on click event of the delete button
function clickDelete (event) {
    console.log(event.target);
    if (event.target.id === 'delete') {
        console.log(event.target);
        event.target.parentNode.remove();
    }
}

//execture the clickDelete function when any element inside the cardSelection class element is clicked
cardParentEl.addEventListener('click', clickDelete);