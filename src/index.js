import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import SnapLogo from "./images/logo.svg";
import Arrowdown from './images/icon-arrow-down.svg';
import Imagehero from './images/image-hero-desktop.png';
import claud from './images/client-audiophile.svg';
import clada from './images/client-databiz.svg';
import clmak from './images/client-maker.svg';
import clmee from './images/client-meet.svg';
import Features from "./Components/Features";
import { useState } from 'react';



const Section = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="main-page">
                <nav>
                    <ul>
                        <div className="left">
                            <li className="logo"><img src={SnapLogo} alt="" /></li>
                            <li onClick={() => setIsOpen((open) => !open)} className="button">Features<img src={Arrowdown} alt="" /><Features open={isOpen}></Features></li>
                            <li onClick={() => setIsOpen((open) => !open)} className="button">Company<img src={Arrowdown} alt="" /><Features open={isOpen}></Features></li>
                            <li className="button">Careers</li>
                            <li className="button">About</li>

                        </div>
                        <div className="right">
                            <li className="btn"><button className="butns">Login</button></li>
                            <li className="btn"><button className="butns">Register</button></li>

                        </div>
                    </ul>
                </nav>
            </div >
            <div className="wrapper">
                <div className="content">
                    <div className="btext">
                        <div className="alltext">
                            <div>
                                <h1>Make</h1>
                                <h2>remote work</h2>
                            </div>
                            <div>
                                <p>Get your team in sync, no matter your location.
                                    Streamline processes, create team rituals
                                    and watch productivity soar. </p>
                            </div>
                        </div>
                        <button className="learn">Learn more</button>
                    </div>
                    <div className="ui-graphics">
                        <nav>
                            <ul>
                                <div className="footer">
                                    <li className="svos"><img src={claud} alt='/' /></li>
                                    <li className="svos"><img src={clada} alt='/' /></li>
                                    <li className="svos"><img src={clmak} alt='/' /></li>
                                    <li className="svos"><img src={clmee} alt='/' /></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="right-pic">
                    <img src={Imagehero} alt="/" />
                </div>
            </div>

        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<Section />,)