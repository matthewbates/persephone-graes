import React, { useEffect } from "react";
import { LoaderContainer, LoadingScreenStyle } from "./LoaderElements";
import ReactLoading from "react-loading";
import gsap from "gsap";

export default function Loader() {
  useEffect(() => {
    gsap.from(".loading-title", {
      y: 100,
      opacity: 0,
      ease: "slow",
      duration: 2.3,
    });
    gsap.from(".loading-number", {
      duration: 2.5,
      textContent: 0,
      ease: "power1.in",
      snap: { textContent: 1 },
    });
    gsap.to([".loading-title", ".loading-number"], {
      delay: 2.8,
      duration: 1,
      opacity: 0,
    });
  }, []);
  return (
    // <LoaderContainer>
    //   <ReactLoading
    //     type="spokes"
    //     color="black"
    //     style={{ height: "50px", width: "50px" }}
    //   />
    // </LoaderContainer>
    <LoadingScreenStyle>
      <div className="loading-container">
        <h1 className="loading-title">Loading</h1>
        <h1 className="loading-number">100%</h1>
      </div>
    </LoadingScreenStyle>
  );
}
