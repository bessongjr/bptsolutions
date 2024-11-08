// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(document).ready(function(){
    $('#projectModal1').on('show.bs.modal', function (e) {
        // Optional: any additional functionality when the modal opens
    });
});
