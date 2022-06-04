import React, { useState } from "react";
import {
  AboutContainer,
  CardContainer,
  AboutText,
  AboutA,
  AboutHours,
} from "./AboutElements";

export default function About() {
  return (
    <AboutContainer>
      {/* <CardContainer> */}
      <AboutText>
        <h1>819 Manitou Ave. Manitou Springs, CO 80829</h1>
        <h2>Located in the Historic Barker House</h2>
        <AboutA>
          <a href="tel:PHONE_NUM">Phone: (719) 755-4215</a>
        </AboutA>
        <AboutHours>Open Everyday, 7 - 4</AboutHours>
      </AboutText>
      {/* </CardContainer> */}
    </AboutContainer>
  );
}
