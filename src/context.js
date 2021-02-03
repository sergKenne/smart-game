import React, { useState, useContext, useEffect } from 'react';
import data from './data_1.json';
import converseArrayToObject from './utils/converseArrayToObject';

const AppContext = React.createContext();

function createObjSavingInputValue(eltByPage, nbPage, itemsTotal) {
    let obj = {};
    let n = 0,
        k = 0;
    for (let i = 0; i < itemsTotal; i++) {
        obj[`${n}-${k}`] = '';
        k++;
        if (k === eltByPage) {
            n = n + 1;
            k = 0;
        }
    }
    return obj;
}

const AppProvider = ({ children }) => {
    
    const [items, setItems] = useState([]);
    const [itemsRandom, setItemRandom] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [memorizationTime, setMemorizationTime] = useState({ minute: 3, second: 0 });
    const [memorizationTimeResult, setMemorizationTimeResult] = useState({ minute: 5, second: 0 });
    const [responseObject, setResponseObject] = useState([]);
    const [results, setResults] = useState([]);
   
    useEffect(() => {
        setItems(data['exercises_blocks']);
        setResponseObject( createObjSavingInputValue(6, 4, 24) );

        const arrRandom = createArrRandom(JSON.parse(JSON.stringify(data['exercises_blocks'])));
        setItemRandom(converseArrayToObject(arrRandom, 6));
        function createArrRandom(arr) {
            arr.sort(() => Math.random() - 0.5);
            return arr;
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                data,
                pageNumber,
                setPageNumber,
                items,
                memorizationTime,
                setMemorizationTime,
                memorizationTimeResult, 
                setMemorizationTimeResult,
                amount: 6,
                itemsRandom,
                setItemRandom,
                responseObject,
                setResponseObject,
                setResults,
                results
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
