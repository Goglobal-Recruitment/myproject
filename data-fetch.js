// Example: fetching data from a hosted JSON file
fetch('https://yourhost.com/data.json') // replace with your file URL
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json(); // parse JSON
  })
  .then(data => {
    console.log('Data received:', data);
    // Here you can use the data to update your app
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
