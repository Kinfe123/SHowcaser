import React from "react";
import {
  AiFillPhone,
  AiFillOutMail,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call info</LinkTitle>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <AiFillPhone size="1rem" />
            <LinkItem href="tel:+251919866517">0919866517</LinkItem>
          </div>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>

          <LinkItem href="mailto:kinfetare83@gmail.com">
            kinfetare83@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>STARTUP Profile</LinkTitle>

          <LinkItem href="https://bit.ly/KINFISHTECH">
            KINFISH TECH(STARTUP)
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Motivation for making peoples cry the whole time in work
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Kinfe123">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/kinfe-michael-tariku-1497b3201/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/umkinfe">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
