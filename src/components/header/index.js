import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import styled, { keyframes } from "styled-components";
import Menu from "./Menu";

export const toggle = keyframes`
from{
    color: white;
}
to{
    color: #6d6698;
}
`;

const RightHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
  transition: 0.125s all ease-in;
  i {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
  &:hover {
    color: #6d6698;
  }
`;

const LeftHeader = styled.div`
  padding: 15px;
  font-size: 18px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  transition: 0.125s all ease-in;
  cursor: pointer;
  &:hover {
    color: #6d6698;
    strong {
      background: #6d6698;
    }
  }
  strong {
    padding: 2px 5px;
    margin-right: 10px;
    color: #120752;
    background: #fff;
    transition: 0.125s all ease-in;
  }
  span {
    font-weight: bold;
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #120752;

  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <LeftHeader>
        <strong>RESUME</strong>
        <span>BY WONGEUN</span>
      </LeftHeader>
      <RightHeader onClick={() => setMenuOpen(!menuOpen)}>
        <span>MENU</span>
        <i>
          <RiMenuLine />
        </i>
      </RightHeader>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </HeaderContainer>
  );
}
