const video = document.getElementById("video");

Promise.all(
    [
        faceapi.nets.tnyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.tnyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]
)

function startVideo(){
    navigator.getUserMedia(
        { video: {} },
    stream => video.srcObject = stream,
    error => console.error(err)
    )
}

startVideo();