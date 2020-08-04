import React from "react";
import styled, { keyframes } from "styled-components";
import { RiShareForwardLine } from "react-icons/ri";

const fadeIn = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}
`;

const BTNGroup = styled.div`
  button {
    display: block;
    width: 100%;
    padding: 10px 0px;
    margin: 10px 0;
    border: none;
    outline: none;
    font-size: 16px;
    letter-spacing: 3px;
    text-align: center;
    cursor: pointer;
    transition: 0.125s all ease-in;
  }

  button:nth-child(1) {
    background: #fff;
    color: rgb(18, 7, 82);
    &:hover {
      background: #817d99;
    }
  }
  button:nth-child(2) {
    background: none;
    color: white;
    border: 2px solid white;
    &:hover {
      color: #817d99;
    }
  }
`;
const Positioner = styled.div`
  min-width: 300px;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s linear;
  background: rgba(18, 7, 82, 0.95);
  ul {
    width: 100%;
    li {
      width: 100%;
      font-weight: bold;
      letter-spacing: 3px;
      text-align: center;

      padding: 15px 0px;
      border-bottom: 1px solid #817d99;

      cursor: pointer;
      transition: 0.125s all ease-in;
      &:hover {
        color: #817d99;
      }
    }
    li:last-child {
      border: none;
    }
  }
  i {
    position: fixed;
    top: 20px;
    right: 30px;
    font-size: 25px;
    cursor: pointer;
    transition: 0.125s all ease-in;
    &:hover {
      color: #817d99;
    }
  }
`;

export default function Menu({ setMenuOpen }) {
  return (
    <MenuContainer>
      <i>
        <RiShareForwardLine onClick={() => setMenuOpen(false)} />
      </i>
      <Positioner>
        <ul>
          <li>HOME</li>
          <li>LANDING</li>
          <li>GENERIC</li>
          <li>ELEMENTS</li>
        </ul>
        <BTNGroup>
          <button>GET STARTED</button>
          <button>LOG IN</button>
        </BTNGroup>
      </Positioner>
    </MenuContainer>
  );
}
