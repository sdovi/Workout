import React from 'react'
import './style.scss'
import img1 from './img/flag.png'
import over1 from './img/over1.png'
import over2 from './img/over2.png'
import over3 from './img/over3.png'
import { Section2_mobile } from './Section2_mobile'


export const Section2 = () => {
    return (
        <div>
            <section className='section2 pb-5' id='sect2'>
                <div className="sect3__bg-color">

                </div>
                <div className="container">
                    <div className="sect3__common-cards-workout">
                        <div className="sect3__cards-workout">
                            {/* <div className="sect3__flag-underflag">
                                <img src={img1} alt="" />
                            </div> */}
                            <div className="sect3__workout-text1">
                                <h1>Workout
                                    Program Made <br />
                                    For You</h1>
                            </div>

                        </div>
                        <div className="sect3__cards2-workout">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>
                            <button>Get started</button>

                        </div>
                    </div>

                    <div className="sect3_box-card">

                        <div className="sect3__cards-over">
                            <div className="sect3__box-over2">
                                <div className="sect3__card1-over">
                                    <img src={over1} alt="" />
                                    <div className="sect3_card1-over-text">
                                        <h5>Samantha William</h5>
                                        <p>Trainer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sect3_box-over2">
                                <div className="sect3__card2-over">
                                    <img src={over2} alt="" />
                                    <div className="sect3_card1-over-text">
                                        <h5>Samantha William</h5>
                                        <p>Trainer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sect3_box-over2">
                            <div className="sect3__cards2-over2">
                                <div className="sect3__card3-over">
                                    <img src={over3} alt="" />
                                    <div className="sect3_card1-over-text">
                                        <h5>Samantha William</h5>
                                        <p>Trainer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sect3__box-card_mobile">
                        <Section2_mobile/>
                    </div>
                </div>
            </section>

        </div>
    )
}