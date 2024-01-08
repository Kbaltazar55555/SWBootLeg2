const urlParams = new URLSearchParams(window.location.search);
const figureId = urlParams.get('id');
const detailsContainer = document.getElementById('figureDetails');

fetch(`http://localhost:4000/api/bootleg-action-figures/${figureId}`)
    .then(response => response.json())
    .then(figure => {
        // Create and append the image element
        const imgElement = document.createElement('img');
        imgElement.src = `http://localhost:4000/${figure.imagePath}`;
        imgElement.alt = 'Figure Image';
        imgElement.classList.add('centered-image');
        detailsContainer.appendChild(imgElement);

        // Displaying figure name
        const nameElement = document.createElement('h2');
        nameElement.textContent = figure.FigureName;
        detailsContainer.appendChild(nameElement);

        // Displaying manufacturer details
        const manufacturerElement = document.createElement('p');
        manufacturerElement.textContent = `Manufacturer: ${figure.Manufacturer}`;
        detailsContainer.appendChild(manufacturerElement);

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            window.location.href = `/source/views/editActionFigure.html?id=${figure._id}`;
        };
        detailsContainer.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            if (confirm('Are you sure you want to delete this figure?')) {
                fetch(`http://localhost:4000/api/bootleg-action-figures/${figure._id}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    window.location.href = '/source/views/actionfigurelist.html';
                })
                .catch(error => console.error('Error:', error));
            }
        };
        detailsContainer.appendChild(deleteButton);
    })
    .catch(error => console.error('Error:', error));
