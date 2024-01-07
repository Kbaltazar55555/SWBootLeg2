const urlParams = new URLSearchParams(window.location.search);
const detailsContainer = document.getElementById('figureDetails');
const figureId = urlParams.get('id');

img.src = `http://localhost:4000/images/${figureId}`;

figures.forEach(figure => {
    const figureDiv = document.createElement('div');
    figureDiv.className = 'figure-item';

    const img = document.createElement('img');
    img.src = `http://localhost:4000/images/${figure._id}`;
    img.alt = 'Figure Image';
    figureDiv.appendChild(img);

    container.appendChild(figureDiv);
});

const imgElement = document.createElement('img');
imgElement.src = `http://localhost:4000/images/${figureId}`;
imgElement.alt = 'Figure Image';

document.getElementById('someContainer').appendChild(imgElement);

