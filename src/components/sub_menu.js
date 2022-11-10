import React from "react";

import { Link } from "react-router-dom";

const Submenu = (props) => {
  const { list, onSubMenuChange } = props;
  const selectedMenu = window.location.pathname.split("/")[1];
  const selectedSubMenu = window.location.pathname.split("/")[2];
  // console.log(selectedSubMenu);
  // console.log(selectedMenu);
  return (
    <div className="header-bottom submenu">
      <div className="px-3">
        <div className="header-navs header-navs-left">
          <ul className="menu-nav mb-0 list-unstyled d-flex flex-wrap">
            {list.length > 0
              ? list.map((item, index) => {
                  if (item.level ===2) {
                    // console.log(
                    //   item.transaction_name
                    //     .replace(/[^a-zA-Z ]/g, "")
                    //     .replace(/\s+/g, "-")
                    //     .toLowerCase()
                    // ); 
                    return (
                      <li className="menu-item" key={"sublist" + index}>
                        <Link
                          onClick={()=>onSubMenuChange(item.transaction_id)}
                          className={
                            "menu-link py-2 px-4 rounded mr-2 d-inline-block " +
                            (selectedSubMenu ===
                            item.transaction_name
                              .replace(/[^a-zA-Z ]/g, "")
                              .replace(/\s+/g, "-")
                              .toLowerCase()
                              ? "active"
                              : "")
                          }
                          to={`/${selectedMenu.toLowerCase()}/${item.transaction_name
                            .replace(/[^a-zA-Z ]/g, "")
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                        >
                          {" "}
                          <span className="menu-text">
                            {item.transaction_name}
                          </span>
                        </Link>
                      </li>
                    );
                  }
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submenu;

// + (selectedSubMenu === (item.transaction_name.replace(/\s+/g, '-').toLowerCase()) ? "active" : "")
