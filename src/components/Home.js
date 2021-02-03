import React from 'react';

const Home = ({ setPageNumber, firstPage, description }) => {
   
    return (
        <div className="home">
            <h2 className="home__title"> Инструкция</h2>
            <p className="home__description">{description}</p>
            <p className="home__description">Количество портретов - 24 шт</p>
            <p className="home__description">Общее время запоминания - 3 минут</p>
            <p className="home__description">Время воспроизведения - 5 минут</p>
            <p className="home__description">Когда будете готовы, нажмите кнопку.</p>
            <div className="home__wrap-btn">
                <a className="waves-effect waves-light btn-large  btn" onClick={() => setPageNumber(1)}>
                    СTAPT
                </a>
            </div>
        </div>
    );
};

export default Home;
