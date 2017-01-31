// creates Metadata object from identifier
function getMetadataFromIdentifier(identifier, options, callBack) {
  var metadata = {
    identifier: identifier
  };
  $.get('https://archive.org/metadata/' + identifier,
    function(response) {
      // we'll have to iterate through to find closest to current timestamp
      // timestamp = 990
      metadata.response = response;
      metadata.transcript = [];
      Object.keys(response[identifier].ccMap).forEach(function(key) {
        metadata.transcript.push(response[identifier].ccMap[key].cc);
      })
      callBack(metadata);
  });
}
