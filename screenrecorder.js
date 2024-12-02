document.getElementById('start').addEventListener('click', startRecording);
document.getElementById('stop').addEventListener('click', stopRecording);

let mediaRecorder;
let recordedChunks = [];
let screenStream;
let audioStream;

async function startRecording() {
    const includeAudio = document.getElementById('includeAudio').checked;
    try {
        screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: 'screen' }
        });

        if (includeAudio) {
            audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const combinedStream = new MediaStream([...screenStream.getTracks(), ...audioStream.getTracks()]);
            mediaRecorder = new MediaRecorder(combinedStream);
        } else {
            mediaRecorder = new MediaRecorder(screenStream);
        }

        mediaRecorder.ondataavailable = function(event) {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = async function() {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const video = document.getElementById('recordedVideo');
            video.src = url;

            video.onloadedmetadata = function() {
                const duration = video.duration;
                if (!isNaN(duration)) {
                    const durationElement = document.getElementById('duration');
                    durationElement.textContent = `مدت کل: ${Math.floor(duration / 60)} دقیقه و ${Math.floor(duration % 60)} ثانیه.`;
                }
            };

            screenStream.getTracks().forEach(track => track.stop());
            if (audioStream) {
                audioStream.getTracks().forEach(track => track.stop());
            }

            const mp4Blob = await convertWebMToMP4(blob);
            const mp4Url = URL.createObjectURL(mp4Blob);

            const downloadButton = document.getElementById('download');
            downloadButton.href = mp4Url;
            downloadButton.classList.remove('disabled');

            document.getElementById('start').disabled = false;
            document.querySelectorAll('input').forEach(el => el.disabled = false);
            document.getElementById('stop').disabled = true;
        };

        recordedChunks = [];
        mediaRecorder.start();
        document.getElementById('start').disabled = true;
        document.getElementById('stop').disabled = false;
    } catch (err) {
        alert('خطا: ' + err.message);
    }
}

function stopRecording() {
    mediaRecorder.stop();
}

async function convertWebMToMP4(blob) {
    return new Blob([blob], { type: 'video/mp4' });
}
