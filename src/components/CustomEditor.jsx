import { Editor } from "@monaco-editor/react";
import PropTypes from "prop-types";
import { useState } from "react";
import Format from "./svg/Format";
import ActionButton from "./ActionButton";
import New from "./svg/New";
import { DEFAULT_HTML } from "../constants";

export default function CustomEditor({ onChange, value }) {
  const [editor, setEditor] = useState(null);

  const onEditorMount = (editor) => {
    setEditor(editor);
    editor.focus();
  };

  const handleFormat = () => {
    editor.trigger("editor", "editor.action.formatDocument");
  };

  const handleNew = () => {
    onChange(DEFAULT_HTML);
  };

  return (
    <div className="relative">
      <Editor
        height="100vh"
        language="html"
        theme="vs-dark"
        value={value}
        onChange={onChange}
        onMount={onEditorMount}
        options={{ minimap: { enabled: false } }}
        loading={<span className="loading loading-spinner loading-lg"></span>}
      />
      <div className="absolute top-2 right-5 space-x-2">
        <ActionButton onClick={handleFormat} tooltip="Formater">
          <Format className="h6 w-6" />
        </ActionButton>
        <ActionButton onClick={handleNew} tooltip="Nouveau">
          <New className="h6 w-6" />
        </ActionButton>
      </div>
    </div>
  );
}

CustomEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleNew: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
