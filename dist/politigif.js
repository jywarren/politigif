PolitiGif = function politiGif() {

  /**
   * Main function. Identifies video element, output container element, grabs video frame,
   * and adds it to the output container, then overlays text and sets up onClick event.
   */
  function capture(options){
    options = options || {};
    options.scaleFactor = options.scaleFactor || 0.5;
    options.videoId     = options.videoId     || 'video';
    options.outputId    = options.outputId    || 'output';

    var video  = document.getElementById(options.videoId);
    var output = document.getElementById(options.outputId);

    var canvas = videoToCanvas(video, options.scaleFactor);

    // does nothing?
    canvas.onclick = function(){
      window.open(this.toDataURL());
    };
    var md = getMetadataFromIdentifier("WUSA_20141123_113000_McLaughlin_Group","",
      function(metadata){
        console.log(metadata.transcript[3]);
      });


    overlayText("HELLO...", canvas, {});

    output.appendChild(canvas);
  }

  // External API
  return {

    capture: capture

  }

}
