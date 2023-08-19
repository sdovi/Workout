    import React from 'react';
import './style.scss';
import img from './img/ss.png'

export const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="header__cards">
                        <div className="header__card-one">
                            <div className="header__btn-new">
                                <div className="header__btn-content">
                                    <button className="header__btn">NEW</button>
                                    <p className="header__description">High Intensity workout to burn calories</p>
                                </div>
                            </div>

                            <div className="header__text-cardio">
                                <div className="header__cardio-content">
                                    <h1>Cardio
                                        Exercise</h1>

                                </div>
                            </div>  
                            <div className="header__text-description">
                                <div className="header__description-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                </div>
                            </div>
                            <div className="header__get-started">
                                <button>Get Started</button>
                                <button>Preview</button>
                            </div>
                        </div>
                        <div className="header__card-two">
                            <div className="header__img-two">

                                <img src={img} alt="" />
                                <div className="header__box">
                                    <div className="header__box-common-time">
                                        <div className="header__time1">
                                            <h1>38:14</h1>
                                            <p>TIME</p>
                                        </div>
                                        <div className="header__time2 ">
                                            <h1>165</h1>
                                            <p>EST CALORIES</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
