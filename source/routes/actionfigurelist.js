fetch('http://localhost:4000/api/bootleg-action-figures')
    .then(response => response.json())
    .then(figures => {
        const container = document.querySelector('.figure-list-container');
        figures.forEach(figure => {
            const figureDiv = document.createElement('div');
            figureDiv.className = 'figure-item';

            const img = document.createElement('img');
            img.src = `http://localhost:4000/${figure.imagePath}`;
            img.alt = figure.FigureName;
            figureDiv.appendChild(img);

            container.appendChild(figureDiv);
        });
    })
    .catch(error => console.error('Error:', error));
