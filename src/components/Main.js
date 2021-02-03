import React from 'react';
import Home from './Home';
import QuestionItems from './QuestionItems';
import Pause from './Pause';
import ResponseItems from './ResponseItems';
import ShowResult from './ShowResult';
import Results from './Results';
import {useGlobalContext}  from '../context';

const Main = () => {

    const { pageNumber, setPageNumber, data } = useGlobalContext();
    
    const pages = [
        <Home
            setPageNumber={setPageNumber}
            description={data.description}
        />,
        <QuestionItems />,
        <Pause />,
        <ResponseItems />,
        <ShowResult />,
        <Results/>
    ];

    return (
        <div className="main">
            <div className="container">{pages[pageNumber]}</div>
            {/* <div className="container">{pages[5]}</div> */}
        </div>
    );
}

export default Main
