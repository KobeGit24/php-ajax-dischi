function init() {
  initApi();
}

function initApi (){

  $.ajax({
      url: 'var.php',
      method: 'GET',
      success: function(data) {

        var success = data['success'];
        var arrMusic = data['response'];

        for (var i = 0; i < arrMusic.length; i++) {
            var template = $('#template').html();
            var compiled = Handlebars.compile(template);
            var target = $('#wall-music');
            var musicHtml = compiled(arrMusic[i]);
            target.append(musicHtml);
        }
      },
      error: function(err) {
        console.log(err);
      }
    });

  }

$(document).ready(init);
