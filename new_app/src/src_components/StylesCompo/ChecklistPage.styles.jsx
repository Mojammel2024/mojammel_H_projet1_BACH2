import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  background-color: #26547c;
  padding: 10px;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Main = styled.main`
  padding: 40px;
  text-align: center;
`;

export const TitleContainer = styled.div`
  background-color: #26547c;
  color: white;
  padding: 20px 0;
  margin: 20px auto;
  margin-bottom: 60px;
  width: 20%;
  border-radius: 25px;
  text-align: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const ChecklistSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const Card = styled.div`
  background-color: #cfc6c6;
  padding: 25px 10px;
  border-radius: 10px;
  width: 50%;
  text-align: left;
  box-shadow: 7px 9px 10px 2px rgba(0, 0, 0, 0.26);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Description = styled.textarea`
  width: 95%;
  height: 50px;
  margin-top: 10px;
  outline: none;
  cursor: default;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  resize: none;
  font-size: 14px;
`;

export const Status = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;

  &.in-progress {
    background-color: #ffd166;
    color: #000;
  }

  &.finished {
    background-color: #000000;
    color: #fff;
  }
`;

export const Tasks = styled.span`
  margin-left: 10px;
`;

export const Actions = styled.div`
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;

  &.edit {
    background-color: #26547c;
    color: #fff;
  }

  &.delete {
    background-color: #ef476f;
    color: #fff;
  }
`;

export const MoreChecklistButton = styled.button`
  margin-left: 42%;
  margin-top: -50px;
  background-color: #d9d9d9;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const NewButton = styled.button`
  background-color: #26547c;
  color: #fff;
  margin-top: 70px;
  margin-bottom: 50px;
  padding: 20px 60px;
  font-size: 25px;
  border-radius: 40px;
  margin-left: 42%;
  font-family: "Roboto", sans-serif;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 20px;
    padding: 15px 50px;
  }
`;

export const Footer = styled.footer`
  background-color: #000;
  color: white;
  padding: 30px 50px;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterLogo = styled.div`
  img {
    width: 200px;
    height: 165px;

    @media (max-width: 768px) {
      width: 150px;
      height: 120px;
    }
  }
`;

export const FooterSections = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-evenly;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const FooterSection = styled.div`
  margin: 0 20px;
  margin-top: -40px;

  h4 {
    font-size: 20px;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
