document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const figureId = urlParams.get('id');
    const form = document.getElementById('editFigureForm'); 

    fetch(`http://localhost:4000/api/bootleg-action-figures/${figureId}`)
        .then(response => response.json())
        .then(figure => {
            document.getElementById('FigureName').value = figure.FigureName;
            document.getElementById('Manufacturer').value = figure.Manufacturer;
            document.getElementById('releaseDate').value = figure.releaseDate;
            document.getElementById('description').value = figure.description; 
        })
        .catch(error => console.error('Error:', error));

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
    
        fetch(`http://localhost:4000/api/bootleg-action-figures/${figureId}`, {
            method: 'PUT',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log('Update successful:', data);
            window.location.href = '/source/views/actionfigurelist.html';
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
