import React, { useState } from "react";
import {
  AboutContainer,
  AboutText,
  AboutImage,
  AboutBio,
} from "./AboutElements";
import Placeholder from "../../assets/placeholder.jpg";
import Card from "../../components/Card";

export default function About() {
  return (
    <AboutContainer>
      <div className="card">
        <AboutText>
          <h1>819 Manitou Ave. Manitou Springs, CO 80829</h1>
          <h2>Located in the Historic Barker House</h2>
        </AboutText>
      </div>
      <br />
      <AboutImage src={Placeholder} alt="chef-img"></AboutImage>
      <br />
      <div className="card">
        <AboutBio>
          Fresh, baked bread. Oven-roasted meats. Made-to-order smoothies. This
          was the starting drive to Persephone Grae's Cafe & Juice Bar.
          <br />
          <br />
          I've been in the food industry for 26 years and have trained under
          some incredible talent. The time has finally come and I'm pleased to
          be able to offer you a home-cooked experience.
          <br />
          <br />
          On behalf of my family and myself, thank you for dining with us. We
          pride ourselves in striving to give you the best experience possible.
        </AboutBio>
      </div>
    </AboutContainer>
  );
}
