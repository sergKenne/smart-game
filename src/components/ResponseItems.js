import React, { useState, useEffect, useRef } from 'react';
import { setTimeMemorization } from '../utils/setTimeMemorization';
import { nextCounter, prevCounter } from './QuestionItems';
import { useGlobalContext } from '../context';

const ResponseItems = () => {
    
    const {
        itemsRandom,
        setPageNumber,
        memorizationTimeResult,
        setMemorizationTimeResult,
        setResponseObject,
        responseObject,
    } = useGlobalContext();
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    const [showNext, setShowNext] = useState(true);
    const [showPrev, setShowPrev] = useState(false);

    const [maxTime, nextPage] = [5, 4]; 
    const handleChange = (e) => {
        e.persist();
        setResponseObject((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

    useEffect(() => {
        setTimeMemorization(maxTime, setMemorizationTimeResult, setTimer, nextPage, setPageNumber);
    }, []);

    return (
        <div className="question">
            <div className="question__counter">{6 * (counter + 1)}/24</div>
            <div className="question__timer">
                <span>
                    {memorizationTimeResult.minute < 10
                        ? `0${memorizationTimeResult.minute}`
                        : memorizationTimeResult.minute}
                </span>
                {':'}
                <span>
                    {memorizationTimeResult.second < 10
                        ? `0${memorizationTimeResult.second}`
                        : memorizationTimeResult.second}
                </span>
            </div>
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
                {itemsRandom != null && Object.keys(itemsRandom).length > 0
                    ? itemsRandom[counter].map((item, ind) => {
                          return (
                              <div key={ind} className="portrait__item">
                                  <div className="portrait__picture">
                                      <img
                                          className="portrait__img"
                                          alt="complex"
                                          src={item.questions[0].key}
                                      />
                                  </div>

                                  <div className="portrait__name portrait__name--input">
                                      <input
                                          className="portrait__input"
                                          type="text"
                                          value={responseObject[`${counter}-${ind}`]}
                                          onChange={handleChange}
                                          name={`${counter}-${ind}`}
                                      />
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
                        setPageNumber(nextPage);
                    }}>
                    СТОП
                </a>
            </div>
        </div>
    );
};

export default ResponseItems;
