// FormPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Main,
  Header,
  Logo,
  BackButton,
  Button,
  TitleContainer,
  Checklist,
  Card,
  CreateTaskButton,
  Actions,
  SaveButton,
  Footer,
  FooterContainer,
  FooterLogo,
  FooterSections,
  FooterSection,
  FooterBottom
} from './StylesCompo/FormPage.styles'; // Import des styles

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

    navigate('/'); // Redirection vers la page d'accueil
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

export default FormPage;
