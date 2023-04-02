let text = document.getElementById('base').innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
    
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
  clipboard.on('success', function(e) {
    $btnCopy.text('Copied');

    setTimeout(function() {
      $btnCopy.text('Copy');
    }, 2000);
})}