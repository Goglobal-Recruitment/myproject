const fetch = require('node-fetch');
const fs = require('fs');

// Replace with your live API or allowed scraping endpoint
const API_URL = 'https://api.example.com/latest'; 

async function fetchData() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Save JSON to resources folder
        fs.writeFileSync('./resources/live-data.json', JSON.stringify(data, null, 2));
        console.log('Live data updated successfully!');
    } catch (err) {
        console.error('Error fetching live data:', err);
    }
}

fetchData();
