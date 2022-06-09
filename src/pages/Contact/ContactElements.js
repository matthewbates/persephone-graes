import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;

  .leftSide {
    height: 100%;
    flex: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .rightSide {
    justify-content: center;
    height: 100%;
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .rightSide h1 {
    font-family: "Great Vibes";
    font-weight: bold;
    font-size: 70px;
    text-align: center;
  }

  .rightSide h4,
  a {
    text-align: center;
    color: black;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 30px;
`;

export const FormLabel = styled.label`
  margin-top: 15px;
  left: 0;
  right: 0;
  color: #414042;
`;

export const FormInput = styled.input`
  height: 40px;
  width: 80%;
  border: none;
  border-bottom: 1px solid #414042;
  border: 2px solid black;
`;

export const FormTextArea = styled.textarea`
  margin-top: 15px;
  height: 80px;
  width: 80%;
  border: 2px solid black;
  outline: none;
  display: block;
  border-bottom: 1px solid #414042;
  color: #414042;
`;

export const FormButton = styled.button`
  border-radius: 50px;
  margin-top: 30px;
  width: 140px;
  height: 40px;
  border: none;
  background-color: #414042;
  color: #f1f2f2;
  font-size: 15px;
  cursor: pointer;
`;
