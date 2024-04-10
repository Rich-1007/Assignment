import React, { useState } from "react";
import { PiShareNetworkLight } from "react-icons/pi";
import { GrView } from "react-icons/gr";

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
            border: "0",

            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <MdKeyboardArrowLeft />
        </button>
      </div>

      <h1 className="heading-1">
        MAITREYA BUDDHA IIN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)
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
            <PiShareNetworkLight size={24} />
          </div>
          <span>120</span>
        </div>
        <div className="action-icons">
          <div className="icon">
            <GrView size={24} />
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
          Maitreya, the future Buddha to be, resides in the Tushita heaven as a
          bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the
          eighth Buddha, a successor of the seven historical Buddhas
          (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha
          will be born in Ketumati. in present-day Varanasi, Uttar Pradesh. As a
          bodhisattva, Maitreya wears a heavily adorned with earrings,
          wristlets, necklaces, and an amulet. The
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
