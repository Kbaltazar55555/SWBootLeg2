const urlParams = new URLSearchParams(window.location.search);
const figureId = urlParams.get('id');
const detailsContainer = document.getElementById('figureDetails');

fetch(`http://localhost:4000/api/bootleg-action-figures/${figureId}`)
    .then(response => response.json())
    .then(figure => {
        // Create and append the image element
        const imgElement = document.createElement('img');
        imgElement.src = `http://localhost:4000/uploads/${figure.imagePath}`; // Updated
        imgElement.alt = 'Figure Image';
        detailsContainer.appendChild(imgElement);

        // Displaying other figure details like name, manufacturer, etc.
        const nameElement = document.createElement('h2');
        nameElement.textContent = figure.FigureName;
        detailsContainer.appendChild(nameElement);

        const manufacturerElement = document.createElement('p');
        manufacturerElement.textContent = `Manufacturer: ${figure.Manufacturer}`;
        detailsContainer.appendChild(manufacturerElement);

        // Add more details as needed, e.g., releaseDate, description, etc.
        // ...
    })
    .catch(error => console.error('Error:', error));
