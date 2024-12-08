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
} from './StylesCompo/TaskDetailsPage.styles'; // Importing styles specific to the TaskDetailsPage component.

const TaskDetailsPage = () => {
  const navigate = useNavigate(); // React Router hook for navigation.

  // Function to handle the back button click, navigates to the home page.
  const handleBack = () => {
    navigate("/"); // Redirecting to the main route.
  };

  return (
    <Container>
      {/* Header section containing the application logo */}
      <Header>
        <Logo src="logo.jpg" alt="Logo" /> 
      </Header>

      <Main>
        {/* Button to navigate back to the previous page */}
        <BackButton>
          <button onClick={handleBack}>Back</button>
        </BackButton>

        {/* Status display container i want to work more on it but i need more time*/}
        <StatusContainer>
          <span>In Progress</span> 
        </StatusContainer>

        {/* Section to display the checklist title ( i know there is something not good here but i can solve i did a easy mistake sorry*/}
        <TitleContainer>
          <h1>Checklist Title</h1> 
        </TitleContainer>

        {/* Section displaying all tasks in the checklist */}
        <ChecklistSection>
          {/* Card representing a single task */}
          <Card>
            <h2>Task title</h2> {/* im sorry i did a mistake with that i know what it should be  */}
            <Description placeholder="Description of the Checklist" /> {/* Read-only description field */}
            <StatusButton className="done">Done</StatusButton> {/* Button indicating task completion */}
          </Card>

          {/* Another card example with a different status */}
          <Card>
            <h2>Task title</h2>
            <Description placeholder="Description of the Checklist" />
            <StatusButton className="not-done">Not Done</StatusButton> {/* Button for incomplete tasks */}
          </Card>

          {/* Button to display more tasks if applicable */}
          <MoreTasksButton>... (More tasks)</MoreTasksButton> {/* Can be connected to pagination or infinite scroll logic (its not work for now) */}
        </ChecklistSection>
      </Main>

      {/* Footer section with additional application links */}
      <Footer>
        <FooterContainer>
          <FooterLogo>
            <img src="logo.jpg" alt="Logo" /> {/* Footer logo, same as in the header */}
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
