(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');

  var $url    = $('.flexsearch-input') || '';

  $('#mainForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: $url, 'http://www.mattbowytz.com/simple_api.json?data=all'
      method: 'GET'
    }).success(function(data) {
      console.log(data);
    }).fail(function(data) {
      console.log(data);
    });
  });
})();

 var items = '';
$.each(data.data.interests, function(i, x) {
  items += '<li>' + x + '</li>;
});
$('ul').append(items);
