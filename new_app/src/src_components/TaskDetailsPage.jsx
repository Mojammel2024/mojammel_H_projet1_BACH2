// TaskDetailsPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  Main,
  BackButton,
  StatusContainer,
  TitleContainer,
  ChecklistSection,
  Card,
  Description,
  StatusButton,
  MoreTasksButton,
  Footer,
  FooterContainer,
  FooterLogo,
  FooterSections,
  FooterSection,
  FooterBottom
} from './TaskDetailsPage.styles'; // Import des styles

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
