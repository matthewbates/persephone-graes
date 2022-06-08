import React, { useState } from "react";
import { AboutContainer, AboutText, AboutA, AboutHours } from "./AboutElements";
import Card from "../../components/Card";

export default function About() {
  return (
    <AboutContainer>
      <div className="about-info">
        <AboutText>
          <h1>819 Manitou Ave. Manitou Springs, CO 80829</h1>
          <h2>Located in the Historic Barker House</h2>
        </AboutText>
      </div>
    </AboutContainer>
  );
}
