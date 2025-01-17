document.addEventListener('DOMContentLoaded', function() {


    // callApi Button is the link to the button we createed
    document.getElementById('showModelInfo').addEventListener('click', function() {

        // Make a call to your FastAPI backend at the endpoint /model_info
        fetch('http://localhost:8000/model_info', {
            method: 'GET', // or 'POST' if your backend expects POST requests
            headers: {
                'Content-Type': 'application/json'
                
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Do something with the data you received
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    });


    chrome.runtime.sendMessage({ action: 'fetchData' }, function(response) {
        if (response.data) {
            console.log('Data from backend:', response.data);
        } else if (response.error) {
            console.log('Error:', response.error);
        }
    });

    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.action === 'updateResponse') {
            document.getElementById('response').innerText = message.content;
        };

        if (message.action === 'updateImage') {
            const imageElement = document.getElementById('detected_face');
            console.log('Image data:', message.content);
            imageElement.src = 'data:image;base64,' + message.content;
            
        };

    });

});


document.getElementById("Github").addEventListener("click", function() {
    console.log("Github button clicked"); // Log for debugging
    window.open("https://github.com/fionavitali/DeepFind"); // Open in a new tab
  });
  