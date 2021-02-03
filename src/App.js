import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="app">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App
