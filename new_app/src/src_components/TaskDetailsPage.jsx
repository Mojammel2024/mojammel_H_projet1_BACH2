import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TaskDetailsPage = () => {
  const navigate = useNavigate();

  // Fonction pour revenir à la page d'accueil
  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <Logo src="logo.jpg" alt="Logo" />
      </Header>

      <Main>
        <BackButton>
          <button onClick={handleBack}>Back</button>
        </BackButton>

        <StatusContainer>
          <span>In Progress</span>
        </StatusContainer>
        
        <TitleContainer>
          <h1>Checklist Title</h1>
        </TitleContainer>

        <ChecklistSection>
          <Card>
            <h2>Task title</h2>
            <Description placeholder="Description of the Checklist" />
            <StatusButton className="done">Done</StatusButton>
          </Card>

          <Card>
            <h2>Task title</h2>
            <Description placeholder="Description of the Checklist" />
            <StatusButton className="not-done">Not Done</StatusButton>
          </Card>

          <MoreTasksButton>... (More tasks)</MoreTasksButton>
        </ChecklistSection>
      </Main>

      <Footer>
        <FooterContainer>
          <FooterLogo>
            <img src="logo.jpg" alt="Logo" />
          </FooterLogo>
          <FooterSections>
            <FooterSection>
              <h4>Support</h4>
              <p>Link to a page or section that <br /> offers a FAQ or help center</p>
            </FooterSection>
            <FooterSection>
              <h4>Contact</h4>
              <p>Redirects to a page or section with <br /> a contact form or information to <br /> contact the app team.</p>
            </FooterSection>
            <FooterSection>
              <h4>Terms of Use</h4>
              <p>Link to the privacy policy, explaining <br /> how user data is protected.</p>
            </FooterSection>
          </FooterSections>
        </FooterContainer>
        <FooterBottom>
          <p>© 2024 Pre-Flight Checklist. All rights reserved.</p>
          <p>Privacy Policy | Additional Links</p>
        </FooterBottom>
      </Footer>
    </Container>
  );
};

export default TaskDetailsPage;

// Styled Components
const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
`;

const Header = styled.header`
  background-color: #26547c;
  padding: 10px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Main = styled.main`
  padding: 40px;
  text-align: center;
`;

const BackButton = styled.div`
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

const TitleContainer = styled.div`
  background-color: #26547c;
  color: white;
  padding: 20px 0;
  margin: 20px auto;
  margin-bottom: 60px;
  width: 20%;
  border-radius: 25px;
  text-align: center;
`;

const StatusContainer = styled.div`
  margin-top: 10px;
  font-size: 18px;
  color: #000000;
  background-color: #ffd166;
  margin-left: 71%;
  margin-right: 20%;
  padding: 3px;

  `;

const ChecklistSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #cfc6c6;
  padding: 25px 10px;
  border-radius: 10px;
  width: 50%;
  text-align: left;
  box-shadow: 7px 9px 10px 2px rgba(0, 0, 0, 0.26);
`;

const Description = styled.textarea`
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

const StatusButton = styled.button`
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

const MoreTasksButton = styled.button`
  margin-top: 20px;
  background-color: #d9d9d9;
  font-family: 'Roboto', sans-serif;
`;


const Footer = styled.footer`
  background-color: #000;
  color: white;
  padding: 30px 50px;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  img {
    width: 200px;
    height: 165px;

    @media (max-width: 768px) {
      width: 150px;
      height: 120px;
    }
  }
`;

const FooterSections = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-evenly;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const FooterSection = styled.div`
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

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;