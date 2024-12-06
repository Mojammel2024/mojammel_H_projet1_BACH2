// TaskDetailsPage.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
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

export const BackButton = styled.div`
  margin-bottom: 20px;
  button {
    padding: 10px 20px;
    background-color: #451B1B;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    margin-left: -95%;
  }
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
`;

export const StatusContainer = styled.div`
  margin-top: 10px;
  font-size: 18px;
  color: #000000;
  background-color: #ffd166;
  margin-left: 71%;
  margin-right: 20%;
  padding: 3px;
`;

export const ChecklistSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #cfc6c6;
  padding: 25px 10px;
  border-radius: 10px;
  width: 50%;
  text-align: left;
  box-shadow: 7px 9px 10px 2px rgba(0, 0, 0, 0.26);
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

export const StatusButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  &.done {
    background-color: #28a745;
    color: #fff;
  }
  &.not-done {
    background-color: #ef476f;
    color: #fff;
  }
`;

export const MoreTasksButton = styled.button`
  margin-top: 20px;
  background-color: #d9d9d9;
  font-family: 'Roboto', sans-serif;
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
