import React from "react";

import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Divi } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br /> this is KINFE
      </SectionTitle>
      <SectionText>
        HEY I am Kinfe Michael Tariku , My job is not working but i am kind of
        finding peoples hire in their company which i would love joining it
        ....Next time you wear a jeans and tshirt and we will be talking a lot
        about my shit...
      </SectionText>
      <Divi>
        <Button
          onClick={() => {
            window.location = "https://t.me/Kinfe123";
          }}
        >
          Ping shit
        </Button>
        <Button
          onClick={() => {
            window.location =
              "https://www.linkedin.com/in/kinfe-michael-tariku-1497b3201/";
          }}
        >
          Download Myresume
        </Button>
      </Divi>
    </LeftSection>
  </Section>
);

export default Hero;
