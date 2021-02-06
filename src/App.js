import React, {useState, useEffect} from 'react';
import GridLoader from 'react-spinners/GridLoader';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 5000)
    },[])
    return (
        <div className="app">
            {loading ? (
                <div className="load-spinner">
                    <GridLoader color={'#183b5e'} loading={loading} size={20} />
                </div>
            ) : (
                <>
                    <Navbar />
                    <Main />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App
