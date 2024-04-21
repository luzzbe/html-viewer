import { Editor } from "@monaco-editor/react";
import PropTypes from "prop-types";
import { useState } from "react";
import Format from "./svg/Format";
import Save from "./svg/Save";
import ActionButton from "./ActionButton";

export default function CustomEditor({ onChange, handleSave, defaultValue }) {
  const [editor, setEditor] = useState(null);

  const handleFormat = () => {
    editor.trigger("editor", "editor.action.formatDocument");
  };

  return (
    <div className="relative">
      <Editor
        onMount={(e) => setEditor(e)}
        height="100vh"
        language="html"
        theme="vs-dark"
        onChange={onChange}
        options={{ minimap: { enabled: false } }}
        loading={<span className="loading loading-spinner loading-lg"></span>}
        defaultValue={defaultValue}
      />
      <div className="absolute top-2 right-5 space-x-2">
        <ActionButton onClick={handleFormat} tooltip="Formater">
          <Format />
        </ActionButton>
        <ActionButton onClick={handleSave} tooltip="Sauvegarder">
          <Save />
        </ActionButton>
      </div>
    </div>
  );
}

CustomEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};
