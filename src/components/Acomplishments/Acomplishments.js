import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 50, text: "Open Source Project / shits" },
  { number: 300, text: "Students /Crying fellow" },
  { number: 400, text: "Students who are currently crying because of me" },
  { number: "10K", text: "Future Projected Crying mession" }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplishment+Crying Times </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} style={{ padding: "3px", textAlign: "center" }}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
