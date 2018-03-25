 'use strict';

 var constraints = {
   video: {
    width: {
      min: 1280
    },
    height: {
      min: 720
    }
   }
 };

 var video = document.querySelector('video');

 function handleSuccess(stream) {
   video.srcObject = stream;
 }

 function handleError(error) {
   console.error('getUserMedia error: ', error);
 }

 navigator.mediaDevices.getUserMedia(constraints).
   then(handleSuccess).catch(handleError);