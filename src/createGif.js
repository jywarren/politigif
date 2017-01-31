/* Depends on these; switch to require():

  <script type="text/javascript" src="node_modules/jsgif/dist/bundle/GifEncoder.js"></script>

 * Adapt to accept imageData instead of canvas context?
 * Get to return an image?
*/
function createGif(canvasArray) {
  var encoder = new GifEncoder(); // 
  //encoder.setRepeat(0); //0  -> loop forever
  //encoder.setDelay(100); //go to next frame every n milliseconds
  //encoder.start();
  canvasArray.forEach(function(canvas) {
    encoder.addImage(canvas.getContext('2d'));
    /* alt for passing through an image
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
      encoder.addImage(image);
    }
    img.src = canvas.toDataURL();
    */
  });
  encoder.encode();
  var binary_gif = encoder.stream().getData() //notice this is different from the as3gif package!
  var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
  return data_url
}
