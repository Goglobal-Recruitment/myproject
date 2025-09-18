<!-- Pay Button -->
<button type="button" onclick="payWithPaystack()">Pay Now</button>

<script src="https://js.paystack.co/v1/inline.js"></script>
<script>
function payWithPaystack() {
    // Example dynamic values from your system
    var userEmail = "user@example.com";   // Replace with dynamic email from your system
    var baseAmountZAR = 1000;             // Replace with dynamic booking amount
    var insuranceUSD = 600;               // Travel insurance in USD
    var usdToZar = 20;                    // Example conversion rate
    var insuranceZAR = insuranceUSD * usdToZar;
    var totalAmountZAR = baseAmountZAR + insuranceZAR;

    var handler = PaystackPop.setup({
        key: 'YOUR_PUBLIC_KEY', 
        email: userEmail,
        amount: totalAmountZAR * 100, // convert to kobo
        currency: 'ZAR',
        ref: 'TXN_' + Math.floor(Math.random() * 1000000000),
        metadata: {
            custom_fields: [
                { display_name: "Business", variable_name: "business_name", value: "Bookings" },
                { display_name: "Travel Insurance (ZAR)", variable_name: "insurance_amount", value: insuranceZAR },
                { display_name: "Voucher Code", variable_name: "voucher_code", value: "" } // user enters promo code here
            ]
        },
        onClose: function() {
            alert('Transaction was not completed.');
        },
        callback: function(response) {
            // Retrieve voucher code entered in modal
            var voucher = response.metadata.custom_fields.find(f => f.variable_name === "voucher_code").value.toUpperCase();

            // Apply discount rules
            var discount = 0;
            if (voucher === "DISCOUNT15") discount = totalAmountZAR * 0.15; // 15% off
            else if (voucher === "SAVE100") discount = 100;                    // ZAR 100 off
            else if (voucher === "WELCOME20") discount = totalAmountZAR * 0.20; // 20% off

            var finalAmountZAR = totalAmountZAR - discount;

            // Optional: alert user
            if (discount > 0) {
                alert("Voucher applied! You saved ZAR " + discount.toFixed(2) +
                      ". Final amount: ZAR " + finalAmountZAR.toFixed(2));
            } else {
                alert("Payment successful! Reference: " + response.reference +
                      "\nTotal Paid: ZAR " + finalAmountZAR.toFixed(2));
            }

            // Optional: send info to backend for verification
            // fetch('/verify-payment?ref=' + response.reference + '&email=' + encodeURIComponent(userEmail) + '&amount=' + finalAmountZAR + '&voucher=' + voucher);
        }
    });

    handler.openIframe(); // Open Paystack modal
}
</script>
