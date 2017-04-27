function displayQuote(data) {
  var quoteMarkup = (
    '<blockquote class="quote_body">' + data.quote + '</blockquote>\
    <div class="quote_author">' + data.author + '</div>'
  );
  $('.js-quote').html(quoteMarkup);
};

function getQuote() {
  var settings = {
    method: 'POST',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    headers: {
      'X-Mashape-Key': '0UzLhUFjS2mshTkUeOrenNVykYnXp1is3JQjsnD8ThqiiWCcMU',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    data: {
      'cat': 'famous'
    },
    dataType: 'json'
  };

  $.ajax(settings)
    .done(function(data) {
      displayQuote(data);
    })
    .fail(function(error) {
      console.error('status:', error.status);
      console.error(JSON.parse(error.responseText).message);
    });
};

// event listeners ////////////////////////////////////////////////////////
function listenForButtonClick() {
  $('.js-button').click(function() {
    getQuote();
  });
}

// window load ////////////////////////////////////////////////////////////
$(function() {
  getQuote();
  listenForButtonClick();
});
