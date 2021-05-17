let buttonBar = document.querySelector('.button-bar');

// Add your code here

// Create an event object function

// Assign data color to buttonBar styling

function changeCol(e) {

    buttonBar.style.backgroundColor = e.target.getAttribute('data-color');

}

//Add event lister to call the changeCol function

buttonBar.addEventListener('click', changeCol);