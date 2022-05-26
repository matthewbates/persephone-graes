import React, { useState } from "react";
import Logo from "../../assets/TextWhite.png";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { BtnLink } from "../ButtonElement";
import Video from "../../videos/video.mp4";
import { Link } from "react-router-dom";

export default function Hero() {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover((hover) => !hover);
  }

  return (
    <HeroContainer id="/">
      <HeroBg>
        {/* <HeroLogo>{Logo}</HeroLogo> */}
        <VideoBg autoPlay loop muted src={Video}></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Persephone Grae's</HeroH1>
        <HeroP>Cafe & Juice Bar</HeroP>
        <HeroBtnWrapper>
          <BtnLink
            to={{ pathname: "https://google.com" }}
            target="_blank"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            primary="true"
            dark="true"
          >
            Download Menu {hover ? <ArrowForward /> : <ArrowRight />}
          </BtnLink>
          <p>
            <a
              href="https://drive.google.com/file/d/1P-vanpG8e6R3EMtsy25de-6XYk2vJlvO/view?usp=sharing"
              target="blank"
            ></a>
            Download Menu
          </p>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
