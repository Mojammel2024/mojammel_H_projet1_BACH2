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
} from "./StylesCompo/ChecklistPage.styles";

const ChecklistPage = () => {
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.stopPropagation();
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cette checklist ?");
    if (confirmDelete) {
      e.target.closest(".card").remove();
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate("/form");
  };

  const handleCardClick = () => {
    navigate("/task-details");
  };

  return (
    <Container>
      <Header>
        <Logo src="logo.jpg" alt="Logo" />
      </Header>
      <Main>
        <TitleContainer>
          <h1>My Checklists</h1>
        </TitleContainer>
        <ChecklistSection>
          <Card onClick={handleCardClick}>
            <h2>Checklist title</h2>
            <Description placeholder="Description of the Checklist" readOnly />
            <Status className="in-progress">Status: In Progress</Status>
            <Tasks>Tasks: 6/7</Tasks>
            <Actions>
              <Button className="edit" onClick={handleEdit}>
                Edit
              </Button>
              <Button className="delete" onClick={handleDelete}>
                Delete
              </Button>
            </Actions>
          </Card>
          <Card onClick={handleCardClick}>
            <h2>Checklist title</h2>
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
          <MoreChecklistButton>... (More checklists)</MoreChecklistButton>
        </ChecklistSection>
        <NewButton>
          <a href="/form">New</a>
        </NewButton>
      </Main>
      <Footer>
        <FooterContainer>
          <FooterLogo>
            <img src="logo.jpg" alt="Logo" />
          </FooterLogo>
          <FooterSections>
            <FooterSection>
              <h4>Support</h4>
              <p>
                Link to a page or section that <br /> offers a FAQ or help center
              </p>
            </FooterSection>
            <FooterSection>
              <h4>Contact</h4>
              <p>
                Redirects to a page or section with <br /> a contact form or information to <br /> contact the app team.
              </p>
            </FooterSection>
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
