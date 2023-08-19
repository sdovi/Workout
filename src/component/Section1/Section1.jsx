import React from 'react'
import './style.scss'
import img1 from './img/photo1.png'
import img2 from './img/photo2.png'
import img3 from './img/photo3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'

export const Section1 = () => {
    return (
        <div>
            <div className="container">
                <section className='section1'>
                    <div className="sect1__video" id='sect1'>
                        <div className="sect1__video-text">
                            <h4>Popular Exercises</h4>
                            <p>SEE MORE EXERCISES</p>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="sect1__card pt-4">
                                    <div className="sect1__card-photo">
                                        <img src={img1} alt="" />
                                    </div>

                                    <h1 className='sect1__card-text'>Treadmill</h1>
                                </div>
                                <div className="sect1__subtitle">
                                    
                                    <p>250 est calories</p>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="sect1__card pt-4">
                                    <div className="sect1__card-photo">
                                        <img src={img2} alt="" />
                                    </div>

                                    <h1 className='sect1__card-text'>Stretching</h1>
                                </div>
                                <div className="sect1__subtitle">
                                    
                                    <p>250 est calories </p>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="sect1__card pt-4">
                                    <div className="sect1__card-photo">
                                        <img src={img3} alt="" />
                                    </div>

                                    <h1 className='sect1__card-text'>Yoga</h1>
                                </div>
                                <div className="sect1__subtitle">
                                    
                                    <p>250 est calories</p>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="sect1__card pt-4">
                                    <div className="sect1__card-photo">
                                        <img src={img4} alt="" />
                                    </div>

                                    <h1 className='sect1__card-text'>Running</h1>
                                </div>
                                <div className="sect1__subtitle">
                                    
                                    <p>250 est calories</p>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="sect1__card pt-4">
                                    <div className="sect1__card-photo">
                                        <img src={img5} alt="" />
                                    </div>

                                    <h1 className='sect1__card-text'>Lifting</h1>
                                </div>
                                <div className="sect1__subtitle">
                                    
                                    <p>250 est calories</p>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="sect1__card pt-4">
                                    <div className="sect1__card-photo">
                                        <img src={img6} alt="" />
                                    </div>

                                    <h1 className='sect1__card-text'>PushUp</h1>
                                </div>
                                <div className="sect1__subtitle">
                                    
                                    <p>250 est calories</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>
            </div>

        </div>
    )
}
