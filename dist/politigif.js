// http://appcropolis.com/blog/web-technology/using-html5-canvas-to-capture-frames-from-a-video/

var videoId = 'video';
var scaleFactor = 0.25;
var snapshots = [];
 
/**
 * Captures a image frame from the provided video element.
 *
 * @param {Video} video HTML5 video element from where the image frame will be captured.
 * @param {Number} scaleFactor Factor to scale the canvas element that will be return. This is an optional parameter.
 *
 * @return {Canvas}
 */
function capture(video, scaleFactor) {
  if(scaleFactor == null){
      scaleFactor = 1;
  }
  var w = video.videoWidth * scaleFactor;
  var h = video.videoHeight * scaleFactor;
  var canvas = document.createElement('canvas');
      canvas.width  = w;
      canvas.height = h;
  var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, w, h);
  return canvas;
} 

/**
 * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
 */
function shoot(){
  var scaleFactor = 0.5;
  var video  = document.getElementById(videoId);
  var output = document.getElementById('output');
  var canvas = capture(video, scaleFactor);
      canvas.onclick = function(){
          window.open(this.toDataURL());
      };
  snapshots.unshift(canvas);

  // move this later
  addText("HELLO...", canvas);

  output.innerHTML = '';
  for(var i=0; i<4; i++){
      output.appendChild(snapshots[i]);
  }
}

function addText(text, canvas) {
  context = canvas.getContext('2d');
  context.fillStyle = "white";
  context.lineWidth = 4;
  context.strokeStyle = "black";
  context.font = "bold 40px Arial";
  context.strokeText(text, 100, 200);
  context.fillText(text, 100, 200);
}

// function createGif(false, imageData) {
function createGif(context) {

  var encoder = new GIFEncoder();

  encoder.setRepeat(0); //0  -> loop forever
                        //1+ -> loop n times then stop
  encoder.setDelay(100); //go to next frame every n milliseconds

  encoder.start();

  // repeat this part. Adapt to accept imageData, as above
  encoder.addFrame(context);

  encoder.finish();
  var binary_gif = encoder.stream().getData() //notice this is different from the as3gif package!
  var data_url = 'data:image/gif;base64,'+encode64(binary_gif);

  return data_url

}
