import { Route, BrowserRouter as Router,Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import './styles/pages.css';
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
      <div>
         <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sakshi Tavaskar"
          studentPhotoUrl="\Images\self.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <Router>
          <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/courses" element={<CoursesPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                

          </Routes>
          <ChatbotComponent/>
        </Router>
      </div>

  )
}

export default App;