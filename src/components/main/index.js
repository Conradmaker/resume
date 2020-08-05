import React from "react";
import styled from "styled-components";
import Contact from "./contact";

export const Darker = styled.div`
  background-color: rgba(30, 40, 80, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const IntroBottom = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  span {
    line-height: 1.5;
    font-size: 16px;
  }
  button {
    display: inline-block;
    height: 100%;
    margin: 0 20px;
    padding: 0 30px;
    background: none;
    border: 2px solid white;
    outline: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.125s all ease-in;
    &:hover {
      color: #817d99;
      border: 2px solid #817d99;
    }
  }
`;
const IntroPositioner = styled.article`
  width: 80%;
  margin: 0 auto;
  h1 {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.8;
    &::after {
      content: "";
      background-color: #ffffff;
      display: block;
      height: 2px;
      margin: 0.325em 0 0.5em 0;
      width: 100%;
    }
  }
`;
const TileSummary = styled(IntroPositioner)`
  padding: 5%;
  color: white;
  max-width: 250px;
  margin: 0;
  h1 {
    font-size: 30px;
  }
  span {
  }
`;
const TilesItem = styled.div`
  min-width: 40%;
  flex: 1;
  background-size: cover;
  background-position: center;

  cursor: pointer;
  ${Darker} {
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;
const Tiles = styled.section`
  width: 100%;
  height: 1300px;
  display: flex;
  flex-wrap: wrap;
  ${TilesItem}:nth-child(2n) {
    flex: 1.2;
  }
  ${TilesItem}:nth-child(4) {
    flex: 0.6;
  }
  ${TilesItem}:nth-child(odd) {
    flex: 0.8;
  }

  ${TilesItem}:nth-child(1) {
    background-image: url("https://p4.wallpaperbetter.com/wallpaper/226/587/751/men-alone-sky-stars-wallpaper-preview.jpg");
    ${Darker} {
      background-color: rgba(55, 119, 176, 0.5);
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
  ${TilesItem}:nth-child(2) {
    background-image: url("https://pbs.twimg.com/media/EV6t-VyXgAE5mS6.jpg");
    ${Darker} {
      background-color: rgba(55, 176, 77, 0.5);
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
  ${TilesItem}:nth-child(3) {
    background-image: url("https://cdn.stocksnap.io/img-thumbs/960w/milky-way_GU161BVOUD.jpg");
    ${Darker} {
      background-color: rgba(17, 11, 71, 0.5);
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
  ${TilesItem}:nth-child(4) {
    background-image: url("https://i.pinimg.com/originals/96/b9/36/96b936d0dbc6dbd0d994b92ed5263750.png");
    ${Darker} {
      background-color: rgba(3, 2, 15, 0.5);
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
  ${TilesItem}:nth-child(5) {
    background-image: url("https://i.imgur.com/mIXvb20.jpg");
    ${Darker} {
      background-color: rgba(100, 97, 133, 0.5);
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
  ${TilesItem}:nth-child(6) {
    background-image: url("https://downloadwap.com/thumbs2/wallpapers/p2ls/new/34/2rvzyyzx.jpg");
    ${Darker} {
      background-color: rgba(86, 78, 90, 0.5);
      &:hover {
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
`;
const Intro = styled.section`
  width: 100%;
  height: 550px;
  margin-top: 50px;
  color: white;
  background-size: cover;
  background-attachment: fixed;
  background-image: url("https://pixelarity.com/items/demos/forty/cyan/images/banner.jpg");
`;
const MainContainer = styled.div`
  width: 100%;
  height: 2000px;
`;

export default function Main({ onCreate }) {
  return (
    <MainContainer>
      <Intro>
        <Darker>
          <IntroPositioner>
            <h1>HELLO I'M WONGEUN</h1>
            <IntroBottom>
              <span style={{ letterSpacing: "2px" }}>
                I'm wanna be a Full-Stack Developer ,and
                <br />
                Today, I'm in Front-End with React.js
              </span>
              <button style={{ letterSpacing: "2px" }}>더 알아보기 &gt;</button>
            </IntroBottom>
          </IntroPositioner>
        </Darker>
      </Intro>
      <Tiles>
        <TilesItem>
          <Darker>
            <TileSummary>
              <h1>안녕하세요!</h1>
              <span>가나다라마바사아자차카타파하</span>
            </TileSummary>
          </Darker>
        </TilesItem>
        <TilesItem>
          <Darker>
            <TileSummary>
              <h1>Hello!</h1>
              <span>가나다라마바사아자차카타파하</span>
            </TileSummary>
          </Darker>
        </TilesItem>
        <TilesItem>
          <Darker>
            <TileSummary>
              <h1>Bonjour!</h1>
              <span>가나다라마바사아자차카타파하</span>
            </TileSummary>
          </Darker>
        </TilesItem>
        <TilesItem>
          <Darker>
            <TileSummary>
              <h1>您好!</h1>
              <span>가나다라마바사아자차카타파하</span>
            </TileSummary>
          </Darker>
        </TilesItem>
        <TilesItem>
          <Darker>
            <TileSummary>
              <h1>สวัสดีครับ!</h1>
              <span>가나다라마바사아자차카타파하</span>
            </TileSummary>
          </Darker>
        </TilesItem>
        <TilesItem>
          <Darker>
            <TileSummary>
              <h1>こんにちは!</h1>
              <span>가나다라마바사아자차카타파하</span>
            </TileSummary>
          </Darker>
        </TilesItem>
      </Tiles>
      <Contact onCreate={onCreate} />
    </MainContainer>
  );
}
