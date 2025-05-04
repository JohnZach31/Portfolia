import React from "react";
import { createRoot } from "react-dom/client";
import "./output.css";


const App = () => {
  return (
    <div className="text-center text-3xl font-bold text-blue-500">
      Hello React + Tailwind!
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
