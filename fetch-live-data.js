const fetch = require('node-fetch');
const fs = require('fs');

// API endpoints
const LIVE_API = 'https://api.example.com/latest'; // Your data source
const FX_API = 'https://open.er-api.com/v6/latest/USD'; // Free USD → ZAR exchange rate

async function fetchData() {
    try {
        // Fetch live travel/booking data
        const response = await fetch(LIVE_API);
        const data = await response.json();

        // Fetch USD → ZAR exchange rate
        const fxResponse = await fetch(FX_API);
        const fxData = await fxResponse.json();
        const usdToZar = fxData.rates.ZAR || 20; // fallback 20 if API fails

        // Convert travel insurance & other USD fields to ZAR
        data.items.forEach(item => {
            if (item.insuranceUSD) {
                item.insuranceZAR = item.insuranceUSD * usdToZar;
            }
            if (item.priceUSD) {
                item.priceZAR = item.priceUSD * usdToZar;
            }
        });

        // Save updated JSON
        fs.writeFileSync('./resources/live-data.json', JSON.stringify(data, null, 2));
        console.log('Live data with ZAR conversion updated!');
    } catch (err) {
        console.error('Error fetching or converting data:', err);
    }
}

fetchData();
