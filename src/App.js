import React, {useState, useEffect} from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        }, 8000)
    },[])
    return (
        <div className="app">
            {loading ? (
                <div className="load-spinner">
                    <ClimbingBoxLoader color={'#183b5e'} loading={loading} size={15} />
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
