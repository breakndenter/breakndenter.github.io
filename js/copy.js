var copyBtn = document.querySelector('#copier_btn');
copyBtn.addEventListener('click', function () {
  var copiedObj = document.querySelector('#copied_text');
  // select the contents
  copiedObj.select();
  
  document.execCommand('copy'); // or 'cut'
}, false);
