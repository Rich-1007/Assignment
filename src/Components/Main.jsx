import React, { useState } from "react";
import Sidebar from "./Sidebar";
import img3 from "../assets/img3.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div>
      <div className="container">
        {/* sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* bg */}
        <div className="main-content">
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            style={{
              display: "inline-flex",
              background:"white",
              border: "2px solid chocolate ",
              padding: "8px",
              margin:"4px",
              borderRadius: "50%",
            }}
          >
            <MdKeyboardArrowLeft />
          </button>

          <div className="image-container">
            <img src={img3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
