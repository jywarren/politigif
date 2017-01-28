/* Depends on these; switch to require():

  <script type="text/javascript" src="node_modules/jsgif/dist/bundle/GifEncoder.js"></script>

 * Adapt to accept imageData instead of canvas context?
 * Get to return an image?
*/
function createGif(context) {
  var encoder = new GifEncoder(); // 
  encoder.setRepeat(0); //0  -> loop forever
  encoder.setDelay(100); //go to next frame every n milliseconds
  encoder.start();
  // repeat this part. 
  encoder.addFrame(context);
  encoder.finish();
  var binary_gif = encoder.stream().getData() //notice this is different from the as3gif package!
  var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
  return data_url
}
