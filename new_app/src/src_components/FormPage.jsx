import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, description: '' }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const saveChecklist = () => {
    const checklistDescription = document.getElementById('checklist-description').value;
    const taskDescriptions = tasks.map(task => task.description);

    localStorage.setItem('checklist', JSON.stringify({
      checklistDescription,
      tasks: taskDescriptions,
    }));

    navigate('/'); // Redirect to the home page (index)
  };

  return (
    
    <Main>
      <Header>
        <Logo>
          <img src="logo.jpg" alt="Logo" />
        </Logo>
      </Header>

      <BackButton>
        <Button onClick={() => navigate('/')} className='buttonBack'>Back</Button>
      </BackButton>

      <TitleContainer>
        <h1>Form</h1>
      </TitleContainer>

      <Checklist>
        <Card>
          <h2>Checklist title</h2>
          <textarea
            id="checklist-description"
            placeholder="Description of the Checklist"
          />
        </Card>

        <CreateTaskButton>
          <Button onClick={addTask}>+ Create a Task</Button>
        </CreateTaskButton>

        {tasks.map((task, index) => (
          <Card className='cardtask' key={task.id}>
            <h2>Task title</h2>
            <textarea
              value={task.description}
              onChange={(e) => {
                const updatedTasks = [...tasks];
                updatedTasks[index].description = e.target.value;
                setTasks(updatedTasks);
              }}
              placeholder="Task description"
            />
            <Actions>
              <Button onClick={() => deleteTask(task.id)} className="delete">
                Delete
              </Button>
            </Actions>
          </Card>
        ))}
      </Checklist>

      <SaveButton onClick={saveChecklist}>Save</SaveButton>

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
    </Main>
  );
};

// Styled Components

const Main = styled.main`
  padding: 0px;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.header`
  background-color: #26547C;
  padding: 10px;
`;

const Logo = styled.div`
  img {
    height: 50px;
    display: flex;
    margin: 0 auto;
  }
`;

const BackButton = styled.div`
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

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #FFD166;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const TitleContainer = styled.div`
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

const Checklist = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Card = styled.div`
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

const CreateTaskButton = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Actions = styled.div`
  margin-top: 10px;

  .delete {
    background-color: #EF476F;
    color: white;
  }
`;

const SaveButton = styled.button`
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

export default FormPage;
