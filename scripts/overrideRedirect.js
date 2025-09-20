(function () {
  const redirectToPayment = () => {
    console.log("Redirecting to custom payment page...");
    window.location.href = "payment.html";
  };

 

  // Intercept JS redirects
  const originalAssign = window.location.assign;
  const originalReplace = window.location.replace;

  window.location.assign = function (url) {
    if (isBlockedPaymentURL(url)) {
      redirectToPayment();
    } else {
      originalAssign.call(window.location, url);
    }
  };

  window.location.replace = function (url) {
    if (isBlockedPaymentURL(url)) {
      redirectToPayment();
    } else {
      originalReplace.call(window.location, url);
    }
  };

  // Block direct href changes
  Object.defineProperty(window.location, 'href', {
    set: function (url) {
      if (isBlockedPaymentURL(url)) {
        redirectToPayment();
      } else {
        window.location.assign(url);
      }
    }
  });

  // Replace only payment links in <a> tags
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href]");
    links.forEach(link => {
      if (isBlockedPaymentURL(link.href)) {
        link.href = "payment.html";
      }
    });
  });
})();
