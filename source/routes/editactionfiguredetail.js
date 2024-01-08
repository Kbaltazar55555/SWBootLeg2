document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const figureId = urlParams.get('id');
    const form = document.getElementById('editFigureForm');

    if (figureId) {
        fetch(`http://localhost:4000/api/bootleg-action-figures/${figureId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(figure => {
                // Populate form fields with existing figure data
                document.getElementById('FigureName').value = figure.FigureName;
                document.getElementById('Manufacturer').value = figure.Manufacturer;
                document.getElementById('releaseDate').value = figure.releaseDate;
                document.getElementById('description').value = figure.description;
            })
            .catch(error => {
                console.error('Error fetching figure details:', error);
                // Display an error message or handle as needed
            });

        form.addEventListener('submit', function(e) {
            console.log(this)
            e.preventDefault();
            const formData = new FormData(this);
            // console.log(formData.getAll());



            fetch(`http://localhost:4000/api/bootleg-action-figures/${figureId}`, {
                method: 'PUT',
                body: formData
            })
         
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                window.location.href = '/source/views/actionfigurelist.html';
            })
            .catch(error => {
                console.error('Error updating figure:', error);
                // Display an error message or handle as needed
            });
        });
    } else {
        console.error('Figure ID is undefined.');
        // Display an error message or redirect as needed
    }
});
