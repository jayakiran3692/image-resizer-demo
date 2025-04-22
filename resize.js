document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('myImage');
    const widthInput = document.getElementById('widthInput');
    const heightInput = document.getElementById('heightInput');
    const btn = document.getElementById('resizeBtn');

    // Set image to initial values
    img.style.width = widthInput.value + 'px';
    img.style.height = heightInput.value + 'px';

    btn.addEventListener('click', () => {
        const w = parseInt(widthInput.value, 10);
        const h = parseInt(heightInput.value, 10);
        if (w > 0 && h > 0) {
            img.style.width = w + 'px';
            img.style.height = h + 'px';
        }
    });
});