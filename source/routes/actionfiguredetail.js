const urlParams = new URLSearchParams(window.location.search);
const figureId = urlParams.get('id');
const detailsContainer = document.getElementById('figureDetails');

fetch(`http://localhost:4000/api/bootleg-action-figures/${figureId}`)
    .then(response => response.json())
    .then(figure => {
        // Display the figure details
    })
    .catch(error => console.error('Error:', error));
