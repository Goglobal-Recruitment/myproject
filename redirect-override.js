// redirect-override.js

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
