document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('actionFigureForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('http://localhost:4000/api/bootleg-action-figures', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = '/source/views/actionfigurelist.html'
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
