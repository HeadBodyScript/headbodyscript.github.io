$(function() {
    var $btnCopy = $('#copy-button');
  
    $btnCopy.on('click', function() {
      var clipboard = new Clipboard('#copy-button');
  
      clipboard.on('success', function(e) {
        $btnCopy.text('Copied');
  
        setTimeout(function() {
          $btnCopy.text('Copy');
        }, 2000);
      });
    });
  });
  