import React from 'react'
import over1 from './img/over1.png'
import over2 from './img/over2.png'
import over3 from './img/over3.png'

export const Section2_mobile = () => {
    return (
        <div>

            <div className="sect3__card1-over pt-5">
                <img src={over1} alt="" />
                <div className="sect3_card1-over-text">
                    <h5>Samantha William</h5>
                    <p>Trainer</p>
                </div>
            </div>
            <div className="sect3__card1-over pt-5">
                <img src={over2} alt="" />
                <div className="sect3_card1-over-text">
                    <h5>Samantha William</h5>
                    <p>Trainer</p>
                </div>
            </div>
            <div className="sect3__card1-over pt-5">
                <img src={over3} alt="" />
                <div className="sect3_card1-over-text">
                    <h5>Samantha William</h5>
                    <p>Trainer</p>
                </div>
            </div>

        </div>
    )
}
