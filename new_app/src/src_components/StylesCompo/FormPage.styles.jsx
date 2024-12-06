// FormPage.styles.js
import styled from 'styled-components';

export const Main = styled.main`
  padding: 0px;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Header = styled.header`
  background-color: #26547C;
  padding: 10px;
`;

export const Logo = styled.div`
  img {
    height: 50px;
    display: flex;
    margin: 0 auto;
    margin-right: 98%;
  }
`;

export const BackButton = styled.div`
  margin-left: -95%;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
  .buttonBack{
    background-color: #451B1B;
    margin-top: 50px;
    margin-left: 50px;
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #FFD166;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

export const TitleContainer = styled.div`
  background-color: #26547C;
  color: white;
  padding: 20px 0;
  margin: 20px auto;
  margin-bottom: 60px;
  width: 20%;
  border-radius: 25px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 18px;
  }
`;

export const Checklist = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const Card = styled.div`
  background-color: #CFC6C6;
  padding: 25px;
  padding-top: 10px;
  border-radius: 10px;
  width: 50%;
  text-align: left;
  box-shadow: 7px 9px 10px 2px rgba(0, 0, 0, 0.26);

  textarea {
    width: 95%;
    height: 50px;
    margin-top: 10px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    resize: none;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CreateTaskButton = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Actions = styled.div`
  margin-top: 10px;

  .delete {
    background-color: #EF476F;
    color: white;
  }
`;

export const SaveButton = styled.button`
  background-color: #26547C;
  color: white;
  margin-top: 70px;
  margin-bottom: 50px;
  padding: 20px 60px;
  font-size: 25px;
  border-radius: 40px;
  margin-left: 42%;
  font-family: 'Roboto', sans-serif;
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    font-size: 18px;
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
