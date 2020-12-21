let textarea = document.getElementById('textarea')
let editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true
  });
editor.setOption('mode','javascript')
editor.setOption('theme','base16-dark');