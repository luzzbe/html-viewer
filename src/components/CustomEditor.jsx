import { Editor } from "@monaco-editor/react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function CustomEditor({ onChange }) {
  const [editor, setEditor] = useState(null);

  const handleFormat = () => {
    editor.trigger("editor", "editor.action.formatDocument");
  };

  return (
    <>
      <button id="format" onClick={() => handleFormat()}>
        Formater
      </button>
      <Editor
        onMount={(e) => setEditor(e)}
        height="100vh"
        language="html"
        theme="vs-dark"
        onChange={onChange}
        options={{ minimap: { enabled: false } }}
      />
    </>
  );
}

CustomEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
};
