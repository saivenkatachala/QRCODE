// script.js
document.getElementById('generate').addEventListener('click', function() {
    var text = document.getElementById('text').value;
    if (text) {
        // Clear previous QR code
        document.getElementById('qrcode').innerHTML = '';

        // Generate new QR code
        new QRCode(document.getElementById('qrcode'), text);
    } else {
        alert('Please enter text to generate QR code.');
    }
});

document.getElementById('modeToggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        document.getElementById('modeLabel').innerText = 'Dark Mode';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('modeLabel').innerText = 'Light Mode';
    }
});
