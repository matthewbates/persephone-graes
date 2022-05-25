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
import { Button } from "../ButtonElement";
import { Link } from "react-router-dom";
import Video from "../../videos/video.mp4";

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
          <Button
            //   this will lead to a downloaded, consolidated pdf version of menu
            to="/"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            primary="true"
            dark="true"
          >
            Download Menu {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
