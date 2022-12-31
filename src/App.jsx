import { useState } from "react";
import "./App.css";
import AboutUs from "./components/aboutus";
import ContactForm from "./components/contactForm";
import FourthContent from "./components/fourthCotent";
import MainContent from "./components/mainCotent.jsx";
import SecContent from "./components/secCotent";
import ThirdContent from "./components/thirdContent.jsx";

function App() {
    return (
        <div className="App">
            <MainContent />
            <SecContent />
            <ThirdContent />
            <FourthContent />
            <AboutUs />
            <ContactForm />
        </div>
    );
}

export default App;
