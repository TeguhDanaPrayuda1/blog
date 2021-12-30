import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <home />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
