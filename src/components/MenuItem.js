import React from "react";

export default function MenuItem({ image }) {
  return (
    <div className="menuItem">
      <div>
        <div>{image}</div>
      </div>
    </div>
  );
}
