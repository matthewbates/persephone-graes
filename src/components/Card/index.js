import React from "react";
import { CardContainer } from "./CardElements";
import classnames from "classnames";

export default function Card({ classes, children, styleOverrides }) {
  <CardContainer styleOverrides={styleOverrides}>
    <div>{children}</div>
  </CardContainer>;
}
