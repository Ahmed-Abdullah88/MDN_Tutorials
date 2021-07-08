// Images Swapping Interactively (onclick)
let myImage = document.querySelector('img');

myImage.onclick = function() {

    mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/pyramids.jpg') {
        myImage.setAttribute('src', 'images/pyramids2.jpg')
    } else {
        myImage.setAttribute('src', 'images/pyramids.jpg')
    }
}

// Personalized Greeting
/*add a button to be used to change the name, then:*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Enter your name: ');
    if (!myName) {
        setUserName();
    } else {
        myHeading.textContent = 'Sudanese pyramids are cool, ' + myName;
        localStorage.setItem('name', myName);
    }
}

myButton.onclick = function() {
    setUserName();
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Sudanese pyramids are cool, ' + storedName;
}
