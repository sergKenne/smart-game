import React, { useState, useEffect, useRef } from 'react';
import converseArrayToObject from '../utils/converseArrayToObject';
import { useGlobalContext } from '../context';

export function nextCounter(counter, setCounter, setPrev, setNext, totalSteps) {

    if (counter === totalSteps) {
        setNext(false);
        setPrev(true);
        setCounter((preCounter) => preCounter + 1);
    } else {
        setCounter((preCounter) => preCounter + 1);
    }
}

export function prevCounter(counter, setCounter, setPrev, setNext) {
    setCounter((preCounter) => preCounter - 1);
    if (counter === 1) {
        setNext(true);
        setPrev(false);
    }
}

const Results = () => {
    const {
        setPageNumber,
        amount,
        results,
        setResponseObject,
        createObjSavingInputValue,
        setMemorizationTime,
    } = useGlobalContext();

    const objectFromArray = converseArrayToObject(results, amount);
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    const [showNext, setShowNext] = useState(true);
    const [showPrev, setShowPrev] = useState(false);

    return (
        <div className="question">
            <div className="question__counter">{6 * (counter + 1)}/24</div>
            {showPrev ? (
                <span
                    className="question__icon question__icon--left"
                    onClick={() => prevCounter(counter, setCounter, setShowPrev, setShowNext)}>
                    <i className="fas fa-chevron-circle-left"></i>
                </span>
            ) : null}
            {showNext ? (
                <span
                    className="question__icon question__icon--right"
                    onClick={() => nextCounter(counter, setCounter, setShowPrev, setShowNext, 2)}>
                    <i className="fas fa-chevron-circle-right"></i>
                </span>
            ) : null}

            <div className="portrait">
                {objectFromArray != null && Object.keys(objectFromArray).length > 0
                    ? objectFromArray[counter].map((item, ind) => {
                          return (
                              <div key={ind} className="portrait__item">
                                  <div className="portrait__picture">
                                      <img className="portrait__img" alt="complex" src={item.key} />
                                  </div>
                                  <div className="portrait__name">
                                      <span style={item.isFirstName ? { color: 'black' } : { color: 'red' }}> 
                                          {item.firstName}
                                      </span>
                                      {'  '}
                                      <span style={ item.isLastName ? { color: 'black' } : { color: 'red' } }>
                                          {item.lastName}
                                      </span>
                                  </div>
                              </div>
                          );
                      })
                    : 'Loading.....'}
            </div>
            <div className="portrait__btn">
                <a
                    className="waves-effect waves-light btn-large  btn"
                    onClick={() => {
                        clearInterval(timer);
                        setPageNumber(0);
                        setResponseObject(createObjSavingInputValue(6, 4, 24));
                        setMemorizationTime({ minute: 3, second: 0 });
                    }}>
                    ВЕРНУТЬСЯ В СTAPT
                </a>
            </div>
        </div>
    );
};

export default Results;
