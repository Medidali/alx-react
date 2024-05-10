// Import jQuery and Lodash
import $ from 'jquery';
import _ from 'lodash';

// Function to update counter
const updateCounter = _.debounce(() => {
    let count = parseInt($('#count').text()) || 0;
    count++;
    $('#count').text(`${count} clicks on the button`);
}, 300); // Debounce delay set to 300ms

// Add elements to the DOM
$(document).ready(() => {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Bind click event and update counter
    $('#clickButton').on('click', updateCounter);
});

