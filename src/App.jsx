import { useEffect, useState } from "react";
import CustomEditor from "./components/CustomEditor";
import Preview from "./components/Preview";
import { DEFAULT_HTML } from "./constants";

function App() {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(window.localStorage.getItem("html-value") || DEFAULT_HTML);
  }, []);

  const onChange = (newValue) => {
    setContent(newValue);
    localStorage.setItem("html-value", newValue);
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <CustomEditor onChange={onChange} value={content} />
      </div>
      <div className="w-1/2">
        <Preview content={content} />
      </div>
    </div>
  );
}

export default App;
