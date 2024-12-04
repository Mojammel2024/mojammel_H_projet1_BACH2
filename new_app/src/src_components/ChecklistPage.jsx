import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


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

export default ChecklistPage;

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

const TitleContainer = styled.div`
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

const ChecklistSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Card = styled.div`
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

const Status = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;

  &.in-progress {
    background-color: #ffd166;
    color: #000;
  }

  &.finished {
    background-color: #28a745;
    color: #fff;
  }
`;

const Tasks = styled.span`
  margin-left: 10px;
`;

const Actions = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;

  &.edit {
    background-color: #26547c;
    color: #fff;
  }

  &.delete {
    background-color: #ef476f;
    color: #fff;
  }
`;

const MoreChecklistButton = styled.button`
  margin-left: 42%;
  margin-top: -50px;
  background-color: #d9d9d9;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const NewButton = styled.button`
  background-color: #26547c;
  color: #fff;
  margin-top: 70px;
  margin-bottom: 50px;
  padding: 20px 60px;
  font-size: 25px;
  border-radius: 40px;
  margin-left: 42%;
  font-family: 'Roboto', sans-serif;

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

