document.addEventListener('DOMContentLoaded', function() {

    if (window.location.href.includes('actionfigurelist.html')) {
        fetch('http://localhost:4000/api/bootleg-action-figures')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(figures => {
                const container = document.querySelector('.figure-list-container');
                if (!container) return; 

                figures.forEach(figure => {
                    const figureDiv = document.createElement('div');
                    figureDiv.className = 'figure-item';

                    // Create and provide image
                    const img = document.createElement('img');
                    img.src = `http://localhost:4000/${figure.imagePath}`;
                    img.alt = figure.FigureName;
                    figureDiv.appendChild(img);

                    container.appendChild(figureDiv);
                });
            })
            .catch(error => console.error('Error:', error));
        }

    // Code for handling form submission
    const form = document.getElementById('actionFigureForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);

            fetch('http://localhost:4000/api/bootleg-action-figures', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                window.location.href = '/source/views/actionfigurelist.html'; 
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    }
});