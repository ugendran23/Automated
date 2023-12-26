document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            document.querySelectorAll('.section').forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block'; 
                } else {
                    section.style.display = 'none'; 
                }
            });

            if (targetId === 'home') {
                document.querySelector('.hero').style.display = 'block';
            } else {
                document.querySelector('.hero').style.display = 'none';
            }
        });
    });
});
