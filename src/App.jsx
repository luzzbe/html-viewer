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
    <div>
      <div className="flex md:hidden justify-center mt-20">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Taille d&apos;écran non supportée</h2>
            <p>
              Pour une meilleure expérience, veuillez agrandir la fenêtre de
              votre navigateur ou augmenter la résolution de votre écran.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="w-1/2">
          <CustomEditor onChange={onChange} value={content} />
        </div>
        <div className="w-1/2">
          <Preview content={content} />
        </div>
      </div>
    </div>
  );
}

export default App;
