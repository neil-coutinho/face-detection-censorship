const webcam     = document.querySelector(".webcam");

const videoCanvas     = document.querySelector(".video");
const vctx = videoCanvas.getContext("2d");

const faceCanvas = document.querySelector(".face");
const fctx = faceCanvas.getContext("2d");

const faceDetector = new FaceDetector();

console.log({webcam, videoCanvas, vctx, faceCanvas, fctx, faceDetector});


async function populateVideo() {
   let stream =  await navigator.mediaDevices.getUserMedia({
       video: { width: 640, height: 480}
   });

   webcam.srcObject = stream;

   await webcam.play(); //without await video width and height are == 0;

   console.log(stream);

   const { videoWidth, videoHeight } = webcam;

   console.log(videoWidth, videoHeight);

   videoCanvas.width = videoWidth;
   videoCanvas.height = videoHeight;


   faceCanvas.width = videoWidth;
   faceCanvas.height = videoHeight;


}


console.log(populateVideo());