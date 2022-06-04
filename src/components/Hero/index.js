import React, { useState } from "react";
import Logo from "../../assets/Text/TextWhite.png";
import Menu from "../../assets/Menu.pdf";
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
import { saveAs } from "file-saver";

export default function Hero() {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover((hover) => !hover);
  }

  function downloadMenu() {
    saveAs(Menu, "pgs.pdf");
  }

  function handleClick() {
    window.open(
      "https://drive.google.com/file/d/1P-vanpG8e6R3EMtsy25de-6XYk2vJlvO/view?usp=sharing"
    );
  }

  return (
    <HeroContainer id="/">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video}></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Persephone Grae's</HeroH1>
        <HeroP>Cafe & Juice Bar</HeroP>
        <HeroBtnWrapper>
          <BtnLink
            onClick={downloadMenu}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            target="_blank"
            rel="noreferrer noopener"
            primary="true"
          >
            Download Menu {hover ? <ArrowForward /> : <ArrowRight />}
          </BtnLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
