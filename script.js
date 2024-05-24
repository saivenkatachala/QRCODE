// script.js
document.getElementById('generate').addEventListener('click', function() {
    var text = document.getElementById('text').value;
    if (text) {
        // Clear previous QR code
        document.getElementById('qrcode').innerHTML = '';

        // Generate new QR code
        var qrCode = new QRCode(document.getElementById('qrcode'), text);

        // Show the copy button
        document.getElementById('copy').style.display = 'block';
    } else {
        alert('Please enter text to generate QR code.');
    }
});

document.getElementById('copy').addEventListener('click', function() {
    var qrCodeCanvas = document.querySelector('#qrcode canvas');
    if (qrCodeCanvas) {
        qrCodeCanvas.toBlob(function(blob) {
            var item = new ClipboardItem({'image/png': blob});
            navigator.clipboard.write([item]).then(function() {
                alert('QR Code copied to clipboard!');
            }, function(error) {
                console.error('Error copying QR code: ', error);
            });
        });
    } else {
        alert('No QR code to copy.');
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
