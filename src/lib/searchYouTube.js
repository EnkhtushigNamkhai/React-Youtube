var searchYouTube = (options, callback) => {
  var obj = {
    'q': options.query,
    'key': options.key,
    'maxResults': options.max,
    'part': 'snippet'
  };

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: obj,
    success: function(data) { callback(data.items); }
  });


 //  $.get('https://www.googleapis.com/youtube/v3/search', obj,
 // function(data) { console.log(data.items); callback(data.items); });

};


var hello = function() {
  console.log('hello');
};
window.hello = hello;

window.searchYouTube = searchYouTube;
