import React, { useEffect, useState } from 'react';
import objToArr from '../utils/objToArr';
import arrOfObject from '../utils/arrOfObject';
import { useGlobalContext } from '../context';

export function getResult(objQuestion, arrResponse) {
    let counter = 0;
    let arrFromObj = [];
    let arrResults = JSON.parse(JSON.stringify(arrResponse));
    let arrAnwser = JSON.parse(JSON.stringify(objQuestion));

     for (let i = 0; i < Object.keys(arrResults).length; i++) {
         arrFromObj = [...arrFromObj, ...arrResponse[i]];
     }
    
    for (let k = 0; k < arrFromObj.length; k++) {
        
        if (arrFromObj[k].questions[0].question_answers[0].value.toLowerCase() == arrAnwser[k].firstName.toLowerCase()) {
            counter = counter + 1;
            arrAnwser[k].isFirstName = true;
        } else  {
            arrAnwser[k].isFirstName = false;
            arrAnwser[k].firstName = arrFromObj[k].questions[0].question_answers[0].value;
        }

        if (
            arrFromObj[k].questions[0].question_answers[1].value.toLowerCase() ==
            arrAnwser[k].lastName.toLowerCase()
        ) {
            counter = counter + 1;
            arrAnwser[k].isLastName = true;
        } else {
            arrAnwser[k].isLastName = false;
            arrAnwser[k].lastName = arrFromObj[k].questions[0].question_answers[1].value;
        }

        arrAnwser[k].key = arrFromObj[k].questions[0].key;
    }

    return { 
        counter, 
        arrAnwser
    };
}

const ShowResult = () => {

    const {
        memorizationTime,
        memorizationTimeResult,
        responseObject,
        itemsRandom,
        setPageNumber,
        amount,
        setResults
    } = useGlobalContext();
    
    const nextPage = 5;
    const maxTimeMemo = 3;
    const maxTimeAnwser = 5;

    const { minute: memoMinute, second: memoSecond } = memorizationTime;
    const { minute: minuteResult, second: secondResult } = memorizationTimeResult;
    const arrayFromObj = objToArr(responseObject, amount);
    const arrFormArrString = arrOfObject(arrayFromObj);

    useEffect(() => {
        setResults(getResult(arrFormArrString, itemsRandom).arrAnwser);
    }, []);
    
    return (
        <>
            <div className="results">
                <h1 className="results__title">ЗАДАНИЕ ПРОЙДЕНО</h1>
                <br />
                <div className="results__outer">
                    <div className="results__item">
                        <div className="results__inner results__inner--text">БАЛЛЫ:</div>
                        <div className="results__inner results__inner--number">
                            {getResult(arrFormArrString, itemsRandom).counter}
                        </div>
                    </div>
                    <div className="results__item">
                        <div className="results__inner results__inner--text">ЗАПОМИНАНИЕ:</div>
                        <div className="results__inner results__inner--number">
                            {maxTimeMemo - 1 - memoMinute < 10
                                ? `0${maxTimeMemo - 1 - memoMinute}`
                                : maxTimeMemo - 1 - memoMinute}
                            :{60 - memoSecond < 10 ? `0${60 - memoSecond}` : 60 - memoSecond}
                        </div>
                    </div>
                    <div className="results__item">
                        <div className="results__inner results__inner--text">ВОСПРОИЗВЕДЕНИЕ:</div>
                        <div className="results__inner results__inner--number">
                            {(maxTimeAnwser - 1 - minuteResult) < 10
                                ? `0${maxTimeAnwser - 1 - minuteResult}`
                                : maxTimeAnwser - 1 - minuteResult}
                            :{60 - secondResult < 10 ? `0${60 - secondResult}` : 60 - secondResult}
                        </div>
                    </div>
                </div>
                <div className="results__btn">
                    <a
                        className="waves-effect waves-light btn-large  btn"
                        style={{ marginRight: '20px' }}
                        onClick={() => {
                            setPageNumber(0);
                        }}>
                        ЗАВЕРШИТЬ
                    </a>

                    <a
                        className="waves-effect waves-light btn-large  btn"
                        onClick={() => {
                            // clearInterval(timer);
                            setPageNumber(nextPage);
                        }}>
                        СМОТРЕТЬ РЕЗУЛЬТАТЫ
                    </a>
                </div>
            </div>
        </>
    );
};

export default ShowResult;
