// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp";
import SignUpForm from "./components/SignUpForm";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
};

export default App;
