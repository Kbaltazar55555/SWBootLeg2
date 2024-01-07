imgElement.src = `data:image/jpeg;base64,${response.image}`;

fetch('http://localhost:4000/api/bootleg-action-figures')
    .then(response => response.json())
    .then(figures => {
        figures.forEach(figure => {
            const figureDiv = document.createElement('div');
            figureDiv.className = 'figure-item';

            const img = document.createElement('img');
            img.src = `data:image/jpeg;base64,${figure.image}`; // Embed Base64 data
            img.alt = figure.FigureName;
            figureDiv.appendChild(img);

            // Append other figure details

            container.appendChild(figureDiv);
        });
    })
    .catch(error => console.error('Error:', error));
