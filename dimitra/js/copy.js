let btnSend = document.querySelector('button');
let message = document.querySelector('h1');

let text = document.getElementById('base').innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
    btnSend.innerText = 'Copied'
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}