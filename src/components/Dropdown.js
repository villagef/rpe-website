import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

import T from "../T";

function Dropdown({ closeMobileMenu }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    closeMobileMenu();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                <T label={item.label} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
