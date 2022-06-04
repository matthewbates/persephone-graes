import React from "react";
import { CardContainer } from "./CardElements";
import classnames from "classnames";
import { useInView } from "react-intersection-observer";

export default function Card({ classes, children, styleOverrides }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  <CardContainer styleOverrides={styleOverrides}>
    <div
      ref={ref}
      className={classnames({ animate: inView }, classes, "content")}
    >
      {children}
    </div>
  </CardContainer>;
}
