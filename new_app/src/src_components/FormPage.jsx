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
} from './StylesCompo/FormPage.styles'; // Styled components are a clean way to organize styles.

const FormPage = () => {
  const [tasks, setTasks] = useState([]); // State to manage the list of tasks.
  const navigate = useNavigate(); // Hook for navigation between pages.

  // Function to add a new task to the list.
  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, description: '' }]);
  };

  // Function to delete a task by its ID.
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to save the checklist and tasks in localStorage.
  const saveChecklist = () => {
    const checklistDescription = document.getElementById('checklist-description').value; // Fetch checklist description.
    const taskDescriptions = tasks.map(task => task.description); // Map to extract task descriptions.

    // Save checklist data in localStorage
    localStorage.setItem('checklist', JSON.stringify({
      checklistDescription,
      tasks: taskDescriptions,
    }));

    navigate('/'); // Redirect to home page after saving.
  };

  return (
    <Main>
      {/* Header section containing the logo */}
      <Header>
        <Logo>
          <img src="logo.jpg" alt="Logo" /> 
        </Logo>
      </Header>

      {/* Button to navigate back to the previous page */}
      <BackButton>
        <Button onClick={() => navigate('/')} className='buttonBack'>Back</Button>
      </BackButton>
      
      <TitleContainer>
        <h1>Form</h1>
      </TitleContainer>

      {/* Section to manage checklist details and tasks */}
      <Checklist>
        {/* Card for entering the checklist title and description */}
        <Card>
          <h2>Checklist title</h2>
          <textarea
            id="checklist-description"
            placeholder="Description of the Checklist" // Placeholder for checklist description.
          />
        </Card>

        {/* Button to create a new task */}
        <CreateTaskButton>
          <Button onClick={addTask}>+ Create a Task</Button>
        </CreateTaskButton>

        {/* Render list of tasks dynamically */}
        {tasks.map((task, index) => (
          <Card className='cardtask' key={task.id}>
            <h2>Task title</h2>
            <textarea
              value={task.description} // Bind the task description to the state.
              onChange={(e) => {
                const updatedTasks = [...tasks]; // Create a copy of tasks.
                updatedTasks[index].description = e.target.value; // Update the specific task.
                setTasks(updatedTasks); // Update state with the modified tasks.
              }}
              placeholder="Task description" // Placeholder for task description.
            />
            <Actions>
              {/* Button to delete a task */}
              <Button onClick={() => deleteTask(task.id)} className="delete">
                Delete
              </Button>
            </Actions>
          </Card>
        ))}
      </Checklist>

      {/* Button to save the checklist */}
      <SaveButton onClick={saveChecklist}>Save</SaveButton>

      {/* Footer section */}
      <Footer>
        <FooterContainer>
          {/* Footer logo */}
          <FooterLogo>
            <img src="logo.jpg" alt="Logo" />
          </FooterLogo>
          {/* Footer sections */}
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
