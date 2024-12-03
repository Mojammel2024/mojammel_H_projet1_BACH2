import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChecklistPage from "./src_components/ChecklistPage";
import FormPage from "./src_components/FormPage";
import TaskDetailsPage from "./src_components/TaskDetailsPage";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChecklistPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/task-details" element={<TaskDetailsPage />} />
      </Routes>
    </Router>
  );
};
export default App
