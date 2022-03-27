import React from "react";
import {
  DiJava,
  DiJavascript1,
  DiPython,
  DiHtml5,
  DiFirebase,
  DiNodejs,
  DiReact,
  DiZend
} from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>My Enemies</SectionTitle>
    <SectionText>
      I have worked with a lot of Enemies which develop my skill to cope up with
      those enemies that i have been working quite often{" "}
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>What the users hate to see</ListTitle>
          <ListParagraph>
            Expr. with <br /> ReactJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Expr. with <br /> MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/**the list of frontend like html , css and js  */}
      <ListItem>
        <DiNodejs size="4rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Expr. with <br /> Nodejs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size="4rem" />
        <ListContainer>
          <ListTitle>What other the user hate to see</ListTitle>
          <ListParagraph>
            Expr. with <br /> HTML & CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="4rem" />
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Expr. with <br /> Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript1 size="4rem" />
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>
            Expr. with <br /> Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="4rem" />
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>
            Expr. with <br /> Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiCplusplus size="4rem" />
        <ListContainer>
          <ListTitle>C++</ListTitle>
          <ListParagraph>
            Expr. with <br /> C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
