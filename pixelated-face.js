const webcam     = document.querySelector(".webcam");

const videoCanvas     = document.querySelector(".video");
const vctx = videoCanvas.getContext("2d");

const faceCanvas = document.querySelector(".face");
const fctx = faceCanvas.getContext("2d");

const faceDetector = new FaceDetector();

console.log({webcam, videoCanvas, vctx, faceCanvas, fctx, faceDetector});

