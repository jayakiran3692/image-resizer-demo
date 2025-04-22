document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('myImage');
    const btn = document.getElementById('resizeBtn');

    img.style.width = '200px';
    img.style.height = 'auto'; // always

    btn.addEventListener('click', () => {
        if (img.style.width === '350px') {
            img.style.width = '200px';
        } else {
            img.style.width = '350px';
        }
    });
});
