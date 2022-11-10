import React, { useState } from "react";
import RgpAdd from "./add";
import SlWipAdd from "./add";
import MrnAddDc from "./add";
import SlWipBrowse from "./browse";
import RgpBrowseDc from "./browse";
import MrnBrowseDc from "./browse";

export default function SlWipIndex() {
  const [selectedIndex, setSeletedIndex] = useState(0);

  const handleIndex = (index) => {
    setSeletedIndex(index);
  };

  return (
    <div className="card card-custom gutter-b  px-7 py-3">
      <ul className="nav nav-tabs nav-tabs-line">
        <li className="nav-item">
          <a
            className={`nav-link ` + (selectedIndex === 0 ? "active" : "")}
            onClick={() => {
              // dispatch(clearSelectedGodownId());
              handleIndex(0);
            }}
          >
            Browse
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ` + (selectedIndex === 1 ? "active" : "")}
            onClick={() => {
              // dispatch(clearSelectedGodownId());
              handleIndex(1);
            }}
          >
            New SL WIP
          </a>
        </li>
      </ul>
      <div className="tab-content">
        {selectedIndex === 0 ? <SlWipBrowse/> : <SlWipAdd />}
      </div>
    </div>
  );
}
