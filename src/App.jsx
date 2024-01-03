import React from "react";
import ContactApp from './components/ContactApp';
import { BrowserRouter } from "react-router-dom";

// styling
import './styles/style.css';

function App() {
    return (
        <BrowserRouter>
            <ContactApp/>
        </BrowserRouter>
    );
}

export default App;
