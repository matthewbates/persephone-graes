import React, { Fragment, useState } from "react";
import { DropdownItems } from "./DropdownItems";
import { Link } from "react-router-dom";
import "../styles/Dropdown.css";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  function handleOnClick() {
    setClick(!click);
  }

  return (
    <Fragment>
      <ul
        onClick={handleOnClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {DropdownItems.map((item) => {
          return (
            <li key={item.title}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => handleOnClick(false)}
              ></Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}
