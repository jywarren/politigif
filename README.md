





### Architecture

1. Find a video URL and associated transcript
2. Identify a time range, either for the request URL (`?start=0&end=60`) or by advancing the video element via JavaScript
  * https://github.com/rwaldron/popcorn.capture can jump around tersely
3. Write a function to excerpt frames at given time intervals: `grabFrame(url, time)` and `grabFrames(url, times)` (latter to iterate)
4. Write function to fetch text by time boundaries OR function to fetch time boundaries from text given a timestamped transcript
5. Write function to overlay text on images
6. Write function to compile into GIF (https://github.com/antimatter15/jsgif)



### Video samples

https://ia800500.us.archive.org/31/items/CSPAN_20090617_150000/CSPAN_20090617_150000.mp4?start=0&end=60&ignore=x.mp4

https://www.c-span.org/person/?donaldtrump




https://github.com/rwaldron/popcorn.capture

### Cross-domain video canvas loading

http://stackoverflow.com/questions/7129178/browser-canvas-cors-support-for-cross-domain-loaded-image-manipulation

https://blog.codepen.io/2013/10/08/cross-domain-images-tainted-canvas/

http://enable-cors.org/

### Misc

Alternative (streaming) gif encoder: https://www.npmjs.com/package/gif-encoder


