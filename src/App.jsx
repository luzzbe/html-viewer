import { useState } from "react";
import CustomEditor from "./components/CustomEditor";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="editor-container">
        <CustomEditor onChange={setValue} />
      </div>
      <div className="preview-container">
        <Preview value={value} />
      </div>
    </div>
  );
}

export default App;
