function identifiersFromApiSearch(searchterm, callback) {
  searchterm = searchterm || 'cspan';

  $.ajax({
    url: 'https://archive.org/advancedsearch.php?q=' + searchterm + '&fl%5B%5D=date&fl%5B%5D=description&fl%5B%5D=downloads&fl%5B%5D=identifier&fl%5B%5D=mediatype&fl%5B%5D=source&fl%5B%5D=subject&fl%5B%5D=title&sort%5B%5D=date+desc&sort%5B%5D=&sort%5B%5D=&rows=50&page=1&output=json&callback=callback&save=yes#raw', 
    dataType: 'jsonp', 
    jsonp: 'callback',
    success: function(response) { 
      var identifiers = [];
      response.response.docs.forEach(function(doc) {
        identifiers.push(doc.identifier);
      });
      callback(identifiers);
    }
  });

}
