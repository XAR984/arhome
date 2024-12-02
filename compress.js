const dropzone = document.getElementById('dropzone');
const uploadInput = document.getElementById('upload');

dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropzone.style.backgroundColor = '#fff0e5';
});

dropzone.addEventListener('dragleave', (event) => {
    event.preventDefault();
    dropzone.style.backgroundColor = 'transparent';
});

dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropzone.style.backgroundColor = 'transparent';
    const file = event.dataTransfer.files[0];
    handleFileUpload(file);
});

dropzone.addEventListener('click', () => {
    uploadInput.click();
});

uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    handleFileUpload(file);
});

document.getElementById('quality').addEventListener('input', function (event) {
    document.getElementById('quality-value').textContent = event.target.value;
});

function handleFileUpload(file) {
    if (!file) return;

    showProgress();

    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            const originalImage = document.getElementById('original-image');
            originalImage.src = event.target.result;
            document.getElementById('original-size').textContent = `Size: ${(file.size / 1024).toFixed(2)} KB`;

            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const qualityValue = document.getElementById('quality').value / 100;
            const compressedDataUrl = canvas.toDataURL('image/jpeg', qualityValue);

            const compressedImage = document.getElementById('compressed-image');
            compressedImage.src = compressedDataUrl;

            const compressedFileSize = Math.round((compressedDataUrl.length - 'data:image/jpeg;base64,'.length) * 3 / 4 / 1024);
            document.getElementById('compressed-size').textContent = `Size: ${compressedFileSize} KB`;

            const previews = document.getElementById('previews');
            previews.style.display = 'flex';

            const downloadButton = document.getElementById('download');
            downloadButton.style.display = 'block';
            downloadButton.href = compressedDataUrl;
            downloadButton.setAttribute('download', 'Compressed-Image.jpg');
            downloadButton.textContent = 'دانلود تصویر کم حجم شده';

            const background = document.getElementById('background');
            background.style.backgroundImage = `url(${event.target.result})`;
            background.style.display = 'block';

            hideProgress();
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
}

function showProgress() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '0%';
    const progressContainer = document.getElementById('progress');
    progressContainer.style.display = 'block';
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100);
}

function hideProgress() {
    const progressContainer = document.getElementById('progress');
    progressContainer.style.display = 'none';
}
