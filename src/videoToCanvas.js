/**
 * Captures a image frame from the provided video element.
 *
 * @param {Video} video HTML5 video element from where the image frame will be captured.
 * @param {Number} scaleFactor Factor to scale the canvas element that will be return. This is an optional parameter.
 * Via http://appcropolis.com/blog/web-technology/using-html5-canvas-to-capture-frames-from-a-video/
 *
 * @return {Canvas}
 */
function videoToCanvas(video, scaleFactor) {
  scaleFactor = scaleFactor || 1;
  var w = video.videoWidth * scaleFactor;
  var h = video.videoHeight * scaleFactor;
  var canvas = document.createElement('canvas');
      canvas.width  = w;
      canvas.height = h;
  var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, w, h);
  return canvas;
} 
