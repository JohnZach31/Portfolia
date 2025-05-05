import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar"; // ✅ Correct import of the component
import "./output.css"; // Tailwind CSS

const App = () => {
  return (
    <div>
        <div className="font-josefin">
      <Navbar /> {/* ✅ Render the Navbar component */}
      <div className="text-center text-3xl font-bold text-blue-500 mt-10">
        Hello React + Tailwind!
      </div>
    </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
