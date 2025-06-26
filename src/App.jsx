import { Route, BrowserRouter as Router,Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import './styles/pages.css';
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";

const App = () => {
  return(
      <div>
        <Router>
          <Routes>
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