document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    // Initially show the login form and hide the signup form
    signupForm.parentElement.style.display = 'none';

    // Event listener for the login link
    document.querySelector('.nav-link[href="#login"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        loginForm.parentElement.style.display = 'block'; // Show login form
        signupForm.parentElement.style.display = 'none'; // Hide signup form
    });

    // Event listener for the signup link
    document.querySelector('.nav-link[href="#signup"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        signupForm.parentElement.style.display = 'block'; // Show signup form
        loginForm.parentElement.style.display = 'none'; // Hide login form
    });
});