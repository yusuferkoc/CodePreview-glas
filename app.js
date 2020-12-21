let textarea = document.getElementById('textarea')
let lineNumbersBtn = document.getElementById('line-numbers-btn')
let editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    mode:'javascript'
  });

let lineNumbers = true ;
editor.setOption('mode','javascript');
editor.setOption('theme','base16-dark');
editor.setOption('lineNumbers',lineNumbers);

lineNumbersBtn.addEventListener('click',(e) => {
  lineNumbers =! lineNumbers;
  editor.setOption('lineNumbers',lineNumbers);
});