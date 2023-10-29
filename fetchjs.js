
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const continueButton = document.querySelector('.sign_in');

continueButton.addEventListener('click', function() {
    const name = nameInput.value;
    const email = emailInput.value;

    // Create a data object to send to the API
    const data = {
        name: name,
        email: email
    };

    // Make a POST request to your API endpoint
    fetch('https://archive-image.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any required headers, such as an API key
            // 'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Data sent successfully');
        } else {
            console.error('Failed to send data');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});