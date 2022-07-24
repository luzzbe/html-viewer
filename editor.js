document.addEventListener("DOMContentLoaded", () => {
  const editor = ace.edit("editor");
  const beautify = ace.require("ace/ext/beautify");

  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/html");
  editor.session.setOption("useWorker", false);
  editor.session.setOption("tabSize", 2);
  editor.session.on("change", () => {
    const val = editor.session.getValue();
    const iframe = document.querySelector("#result iframe");
    iframe.setAttribute("src", "about:blank");
    iframe.setAttribute("srcdoc", val);
  });

  document.querySelector("#format").addEventListener("click", () => {
    editor.session.setValue(
      html_beautify(editor.session.getValue(), {
        indent_size: 2,
      })
    );
  });
});
