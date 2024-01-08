document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const figureId = urlParams.get('id');
    const detailsContainer = document.getElementById('figureDetails');

    if (figureId && detailsContainer) {
        fetch(`http://localhost:4000/api/bootleg-action-figures/${figureId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(figure => {
                // Append elements to display figure details
                const imgElement = document.createElement('img');
                imgElement.src = `http://localhost:4000/${figure.imagePath}`;
                imgElement.alt = 'Figure Image';
                imgElement.classList.add('centered-image');
                detailsContainer.appendChild(imgElement);

                const nameElement = document.createElement('h2');
                nameElement.textContent = figure.FigureName;
                detailsContainer.appendChild(nameElement);

                const manufacturerElement = document.createElement('p');
                manufacturerElement.textContent = `Manufacturer: ${figure.Manufacturer}`;
                detailsContainer.appendChild(manufacturerElement);
            })
            .catch(error => {
                console.error('Error fetching figure details:', error);
                // Handle the error appropriately
            });
    } else {
        console.error('Figure ID is undefined or details container not found.');
        // Handle the missing figure ID or container element appropriately
    }
});
