





### Architecture

0. [x] find transcript for a given IA video
1. [x] Find a video URL and associated transcript
2. Identify a time range, either for the request URL (`?start=0&end=60`) or by advancing the video element via JavaScript
  * https://github.com/rwaldron/popcorn.capture can jump around tersely
3. Write a function to excerpt frames at given time intervals: `grabFrame(url, time)` and `grabFrames(url, times)` (latter to iterate)
4. Write function to fetch text by time boundaries OR function to fetch time boundaries from text given a timestamped transcript
5. [x] Write function to overlay text on images
6. [x] Write function to compile into GIF (https://github.com/antimatter15/jsgif)



### Video samples

Archive.org `unique_id`s can be fetched from the RSS feeds like this:

CSPAN date-sorted video listing: 

https://archive.org/advancedsearch.php?q=cspan&fl%5B%5D=date&fl%5B%5D=description&fl%5B%5D=downloads&fl%5B%5D=identifier&fl%5B%5D=mediatype&fl%5B%5D=source&fl%5B%5D=subject&fl%5B%5D=title&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=callback&save=yes#raw

Feeds:

* https://archive.org/details/tv - all TV news
* https://archive.org/services/collection-rss.php?collection=trumparchive&output=json - Trump archive in JSON
* https://archive.org/services/collection-rss.php?collection=TV-CSPAN
* Video link examples: https://archive.org/download/CSPAN_20170125_154100_Nancy_Pelosi_Calls_Voter_Fraud_Investigation_Really_Strange/format=h.264

We can base everything off the unique identifier. Much metadata can be found with: 

`https://archive.org/metadata/<unique_id>`

Including:

* closed captioning - "ccMap"
* thumbnails
* various download formats
* appropriate servers to use - "server"

i.e. 

```js
$.get('https://archive.org/metadata/WUSA_20141123_113000_McLaughlin_Group/',function(response) { console.log(response.
WUSA_20141123_113000_McLaughlin_Group
.ccMap) })
```

Using the "server" metadata entry, we can compose URLs like this:

`https://ia800500.us.archive.org/31/items/<unique_id>/<unique_id>.mp4?start=0&end=60&ignore=x.mp4`

****

Full Internet Archive API: https://archive.org/advancedsearch.php#raw

Best CSPAN date-sorted video listing: https://archive.org/advancedsearch.php?q=cspan&fl%5B%5D=date&fl%5B%5D=description&fl%5B%5D=downloads&fl%5B%5D=identifier&fl%5B%5D=mediatype&fl%5B%5D=source&fl%5B%5D=subject&fl%5B%5D=title&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=callback&save=yes#raw

Or with mediatype=movies: https://archive.org/advancedsearch.php?q=cspan&fl%5B%5D=date&fl%5B%5D=description&fl%5B%5D=downloads&fl%5B%5D=identifier&fl%5B%5D=mediatype&fl%5B%5D=source&fl%5B%5D=subject&fl%5B%5D=title&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=callback&save=yes&mediatype=movies#raw


### Cross-domain video canvas loading

(unnecessary with Internet Archive)

http://stackoverflow.com/questions/7129178/browser-canvas-cors-support-for-cross-domain-loaded-image-manipulation

https://blog.codepen.io/2013/10/08/cross-domain-images-tainted-canvas/

http://enable-cors.org/

### Misc

Alternative (streaming) gif encoder: https://www.npmjs.com/package/gif-encoder


