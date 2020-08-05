import React, { useState } from "react";
import styled from "styled-components";
import { MdSettingsCell, MdMail, MdRoom } from "react-icons/md";

const RightBox = styled.ul`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  li {
    padding-left: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    border-bottom: 1px solid #35415e;
    h3 {
      position: relative;
      font-size: 25px;
      font-weight: bold;
      i {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 30px;
        background: white;
        color: #1b2640;
        position: absolute;
        top: 50%;
        left: -60px;
        transform: translate(0, -50%);
      }
    }
    span {
      margin-top: 20px;
      line-height: 1.5;
      font-size: 18px;
    }
  }
`;

const BTNGroup = styled.div`
  margin-bottom: 50px;
  button {
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #1e305c;
    letter-spacing: 2px;
    border: 2px solid white;
    outline: none;
    background: white;
    padding: 15px 25px;
    cursor: pointer;
    transition: 0.125s all ease-in;
    &:hover {
      background: none;
      border: 2px solid #7089c4;
      color: #7089c4;
    }
  }

  button:nth-child(2) {
    margin-left: 2rem;
    background: none;
    color: white;
    box-sizing: border-box;

    &:hover {
      border: 2px solid #7089c4;
      color: #7089c4;
    }
  }
`;
const MessageGroup = styled.div`
  margin: 30px 0;
  width: 100%;
  textarea {
    width: 95%;
    font-weight: bold;
  }
`;
const TopGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    width: 100%;
  }

  input {
    height: 2.5rem;
    width: 90%;
  }
`;
const LeftBox = styled.form`
  padding: 80px 130px 80px 200px;
  border-right: 1px solid #35415e;
  flex: 1;
  display: flex;
  flex-direction: column;
  label {
    font-size: 15px;
    font-weight: 550;
    color: white;
    display: block;
    margin-bottom: 20px;
  }
  input,
  textarea {
    border: none;
    outline: none;
    background: #35415e;
    color: white;
    font-size: 18px;
    padding: 5px 10px;
    box-sizing: border-box;
    &:focus {
      border: 2px solid white;
    }
  }
`;
const ContactContainer = styled.section`
  background: #202d42;
  display: flex;
  background-size: cover;
  background-attachment: fixed;
  border-bottom: 1px solid #35415e;
`;
export default function Contact({ onCreate }) {
  const initialInputs = { name: "", email: "", message: "" };
  const [inputs, setInputs] = useState(initialInputs);
  const { name, email, message } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(name, email, message);
    setInputs(initialInputs);
  };
  return (
    <ContactContainer>
      <LeftBox onSubmit={onSubmit}>
        <TopGroup>
          <div>
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" value={name} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="email" value={email} onChange={onChange} />
          </div>
        </TopGroup>
        <MessageGroup>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            name="message"
            rows="10"
            value={message}
            onChange={onChange}
          ></textarea>
        </MessageGroup>
        <BTNGroup>
          <button type="submit">글 남기기</button>
          <button onClick={() => setInputs(initialInputs)}>초기화</button>
        </BTNGroup>
      </LeftBox>
      <RightBox>
        <li>
          <h3>
            Phone
            <i>
              <MdSettingsCell />
            </i>
          </h3>
          <span>010-8731-0337</span>
        </li>
        <li>
          <h3>
            Email
            <i>
              <MdMail />
            </i>
          </h3>
          <span>
            yhg0337@gmail.com <br /> yhg0337@naver.com
          </span>
        </li>
        <li>
          <h3>
            Address
            <i>
              <MdRoom />
            </i>
          </h3>
          <span>서울시 서초구 양재동</span>
        </li>
      </RightBox>
    </ContactContainer>
  );
}
