document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('myImage');
    const container = document.getElementById('container');
    const widthInput = document.getElementById('widthInput');
    const heightInput = document.getElementById('heightInput');
    const btn = document.getElementById('resizeBtn');
    const sizeDisplay = document.getElementById('sizeDisplay');

    function updateAll(w, h) {
        img.style.width = w + 'px';
        img.style.height = h + 'px';
        img.setAttribute('width', w);
        img.setAttribute('height', h);

        container.style.width = w + 'px';
        container.style.height = h + 'px';

        sizeDisplay.textContent = `Viewport <div> style and <img> size: ${w}px × ${h}px`;
    }

    btn.addEventListener('click', () => {
        const w = parseInt(widthInput.value, 10);
        const h = parseInt(heightInput.value, 10);
        if (w > 0 && h > 0) {
            updateAll(w, h);
        }
    });

    // Initialize on load
    updateAll(parseInt(widthInput.value, 10), parseInt(heightInput.value, 10));
});
