import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const Pause = () => {

    const {setPageNumber } = useGlobalContext()
    const [pause, setPause] = useState(60);

    useEffect(() => {
        const timer = setInterval(() => {
            setPause((prevState) => prevState - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            setPageNumber(3);
        }, 1000*60); 
    }, []);
    return (
        <div className="pause">
            <div className="pause__wrap">
                <img className="pause__spinner" src="/public/img/arc1.gif" alt="" />
                <div className="pause__item">
                    <p style={{ fontSize: '2.7rem', fontWeight: 'bold' }}>
                        {`${('0' + Math.floor(pause / 60)).slice(-2)}:${('0' + (pause % 60)).slice(
                            -2,
                        )}`}
                    </p>
                    <p className="pause__text" style={{ fontSize: '2rem' }}>
                        ПРИПОМИНАНИЕ
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pause;
