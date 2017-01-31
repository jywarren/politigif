// adds text to a canvas
function overlayText(text, canvas, options) {
  options = options || {};
  context = canvas.getContext('2d');
  context.fillStyle = "white";
  context.lineWidth = 4;
  context.strokeStyle = "black";
  context.font = "bold 20px Arial";
  context.strokeText(text, 100, 200);
  context.fillText(text, 100, 200);
}
