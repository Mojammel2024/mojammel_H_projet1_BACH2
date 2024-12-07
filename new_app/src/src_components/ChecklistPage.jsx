import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  Main,
  TitleContainer,
  ChecklistSection,
  Card,
  Description,
  Status,
  Tasks,
  Actions,
  Button,
  MoreChecklistButton,
  NewButton,
  Footer,
  FooterContainer,
  FooterLogo,
  FooterSections,
  FooterSection,
  FooterBottom,
} from "./StylesCompo/ChecklistPage.styles"; // Styled components are a clean way to organize styles.

const ChecklistPage = () => {
  const navigate = useNavigate(); // Hook for navigation.

  // Handles the delete button click; prevents propagation to avoid triggering card click.
  const handleDelete = (e) => {
    e.stopPropagation();
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cette checklist ?");
    if (confirmDelete) {
      e.target.closest(".card").remove(); // Removes the closest card element
    }
  };

  // Handles the edit button click; navigates to the form page.
  const handleEdit = (e) => {
    e.stopPropagation();
    navigate("/form");
  };

  // Handles card click; navigates to the task details page.
  const handleCardClick = () => {
    navigate("/task-details");
  };

  return (
    <Container>
      {/* Header section containing the logo */}
      <Header>
        <Logo src="logo.jpg" alt="Logo" /> {/* Consider using dynamic or context-based logos. */}
      </Header>
      <Main>
        <TitleContainer>
          <h1>My Checklists</h1>
        </TitleContainer>
        <ChecklistSection>
          {/* Individual checklist cards */}
          <Card onClick={handleCardClick}>
            <h2>Checklist title</h2> {/* Replace hardcoded title with props  */}
            <Description placeholder="Description of the Checklist" readOnly /> {/* Use props to populate the description dynamically. */}
            <Status className="in-progress">Status: In Progress</Status> {/* Add logic to toggle statuses dynamically */}
            <Tasks>Tasks: 6/7</Tasks> 
            <Actions>
              {/* Edit and Delete buttons with their respective handlers */}
              <Button className="edit" onClick={handleEdit}>
                Edit
              </Button>
              <Button className="delete" onClick={handleDelete}>
                Delete
              </Button>
            </Actions>
          </Card>
          <Card onClick={handleCardClick}>
            <h2>Checklist title</h2> {/* Consider mapping over data for multiple cards. */}
            <Description placeholder="Description of the Checklist" readOnly />
            <Status className="finished">Status: Finished</Status>
            <Tasks>Tasks: 7/7</Tasks>
            <Actions>
              <Button className="edit" onClick={handleEdit}>
                Edit
              </Button>
              <Button className="delete" onClick={handleDelete}>
                Delete
              </Button>
            </Actions>
          </Card>
          <MoreChecklistButton>... (More checklists)</MoreChecklistButton> {/* Add a handler for loading more checklists. */}
        </ChecklistSection>
        <NewButton>
          <a href="/form">New</a> 
        </NewButton>
      </Main>
      <Footer>
        <FooterContainer>
          {/* Logo section in the footer */}
          <FooterLogo>
            <img src="logo.jpg" alt="Logo" />
          </FooterLogo>
          <FooterSections>
            {/* Support section */}
            <FooterSection>
              <h4>Support</h4>
              <p>
                Link to a page or section that <br /> offers a FAQ or help center
              </p>
            </FooterSection>
            {/* Contact section */}
            <FooterSection>
              <h4>Contact</h4>
              <p>
                Redirects to a page or section with <br /> a contact form or information to <br /> contact the app team.
              </p>
            </FooterSection>
            {/* Terms of use section */}
            <FooterSection>
              <h4>Terms of Use</h4>
              <p>
                Link to the privacy policy, explaining <br /> how user data is protected.
              </p>
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

export default ChecklistPage;
