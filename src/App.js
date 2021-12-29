import React from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="w-full h-full">
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
