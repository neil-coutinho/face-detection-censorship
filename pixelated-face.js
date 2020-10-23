const webcam = document.querySelector(".webcam");

const videoCanvas = document.querySelector(".video");
const vctx = videoCanvas.getContext("2d");




const faceCanvas = document.querySelector(".face");
const fctx = faceCanvas.getContext("2d");



const profilePhoto = document.getElementById("profilePhoto");

const fd = new FaceDetector({ fastMode: true });

if (window.FaceDetector == undefined) {
    console.error('Face Detection not supported');
    return;
  }

console.log({webcam, videoCanvas, vctx, faceCanvas, fctx, fd});


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

async function detect() {
    
    const faces = await fd.detect(webcam);
   
    // const profileFace = await fd.detect(profilePhoto);
    // console.log({faces, profileFace});

    faces.forEach(drawFace);
    //profileFace.forEach(drawFace)

   requestAnimationFrame(detect);
}


function drawFace(face) {
    console.log(face);
    const {boundingBox : {width, height, top, left}} = face;

    console.log({width, height, top, left})
    vctx.clearRect(0,0,videoCanvas.width, videoCanvas.height )
    vctx.strokeStyle = '#ff9900';
    vctx.lineWidth = 1;
    vctx.strokeRect(left, top, width, height);
}
populateVideo().then(detect)


