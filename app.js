"use strict";

const userName = prompt('What is your name?');
const userAge = +prompt('How old are you?');

if (userAge < 18) {
    alert('You are not allowed to visit this website');
} else if (userAge >= 18 && userAge <= 22) {
        if (confirm('Are you sure you want to continue?')) {
            alert(`Welcome, ${userName}`);
        } else {
            alert('You are not allowed to visit this website');
        }
} else if (userAge > 22) {
        alert(`Welcome, ${userName}`);
}

       