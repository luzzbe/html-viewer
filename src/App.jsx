import { useEffect, useState } from "react";
import CustomEditor from "./components/CustomEditor";
import Preview from "./components/Preview";

function App() {
  const [value, setValue] = useState("");
  const [showSavedToast, setShowSavedToast] = useState(false);

  useEffect(() => {
    setValue(window.localStorage.getItem("html-value") || "");
  }, []);

  const handleSave = () => {
    setShowSavedToast(true);
    window.localStorage.setItem("html-value", value);
    setTimeout(() => setShowSavedToast(false), 3000);
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <CustomEditor
          onChange={setValue}
          handleSave={handleSave}
          defaultValue={value}
        />

        {showSavedToast && (
          <div className="toast toast-bottom toast-center">
            <div className="alert alert-success">
              <span>Modifications sauvegardées</span>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/2">
        <Preview value={value} />
      </div>
    </div>
  );
}

export default App;
