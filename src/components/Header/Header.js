import Link from "next/link";
import React from "react";

import {
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px"
          }}
        >
          <DiCssdeck size="3rem" /> <Span>KINFISH PORFOLIO</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Shits</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Enemies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Kinfe123">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/kinfe-michael-tariku-1497b3201/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/umkinfe">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
