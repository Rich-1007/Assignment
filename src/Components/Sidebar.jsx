import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={`sidebar ${isSidebarOpen ? "sidebar-open" : "sidebar-close"}`}
    >
      <div className="sidebar-content">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          style={{
            display: "inline-flex",
            border: "1px solid red",
            padding: "8px",
            borderRadius: "50%",
          }}
        >
          <MdKeyboardArrowLeft />
        </button>
      </div>

      <h1 className="heading-1">
        MAITREYA BUDDHA IIN GESTURE OF FEARLESSNESS(ABHAYA MUDRA)
      </h1>
      <div className="actions">
        <div className="action-icons">
          <div className="icon">
            <CiHeart size={24} />
          </div>
          <span>0</span>
        </div>
        <div className="action-icons">
          <div className="icon">
            <CiHeart size={24} />
          </div>
          <span>120</span>
        </div>
        <div className="action-icons">
          <div className="icon">
            <CiHeart size={24} />
          </div>
          <span>27</span>
        </div>
      </div>

      <div className="information">
        <div>
          <span>Dynasty :</span> <span>Ahhichhatra</span>
        </div>
        <div>
          <span>Period :</span> <span>200CE</span>
        </div>
        <div>
          <span>Material :</span> <span>Sandstone</span>
        </div>
        <div>
          <span>Location :</span> <span>National Museum</span>
        </div>
      </div>

      <div className="description">
        <p className="desc-head">Description :</p>

        <p className="desc-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, totam
          assumenda molestiae id suscipit quod at dignissimos laudantium nemo
          cum perferendis, quisquam dolore. Laudantium, qui excepturi. Maiores
          accusamus inventore incidunt ipsa. Atque cum dignissimos ratione quo,
          molestiae eveniet accusantium a non velit nihil voluptatibus quibusdam
          et inventore? Eligendi, praesentium rem. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Soluta, beatae!
        </p>

        <button className="read-btn">
          <FaArrowRightLong />
          READ MORE
        </button>

        <div className="sidebar-footer-btns">
          <button className="btn add-btn">ADD TO COLLECTION</button>
          <button className="btn souvenir-btn">SOUVENIR</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
