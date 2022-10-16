import React from "react";

import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Divi } from "./HeroStyles";
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch("KINFE_MICHAEL_TARIKU.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "KINFE_MICHAEL_TARIKU.pdf";
      alink.click();
    });
  });
};
const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br /> this is KINFE
      </SectionTitle>
      <SectionText>
        I am Kinfe Michael Tariku , teen age programmer (Software engineer)
        based on Ethiopia ,Adiss Ababa. i like building thing from scatch and
        sharing what i have discovered
      </SectionText>
      <Divi>
        <Button
          onClick={() => {
            window.location = "https://t.me/Kinfe123";
          }}
        >
          Ping shit
        </Button>
        <Button onClick={onButtonClick}>Download My resume</Button>
      </Divi>
    </LeftSection>
  </Section>
);

export default Hero;
