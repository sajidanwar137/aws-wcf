import React from 'react';
import './style.scss'

const Features = () => {
    return(
        <div className="feature-outer section">
            <div className="container">
                <div className="feature-box">
                    <figure>
                        <img src="../images/artificial-icon.png" alt=""/>
                    </figure>
                    <div className="feature-text">
                        <h3>Artificial Intelligence</h3>
                        <h4>In-game analytics to make your fantasy experience more enjoyable.</h4>
                        <p>
                        Our AI technology gives you  a competitive edge and enhances your gaming experience by helping you make 
                        smarter choices by conveying updated models on the newly collected data.
                        </p>
                    </div>
                </div>
                <div className="feature-box">
                    <figure>
                        <img src="../images/high-icon.png" alt=""/>
                    </figure>
                    <div className="feature-text">
                        <h3>High-Level Experts</h3>
                        <h4>International Expert Panel Help</h4>
                        <ul className="list">
                            <li>Select Game Winners</li>
                            <li>Select most Promising Players</li>
                            <li>Discuss Sleepers</li>
                        </ul>
                    </div>
                </div>
                <div className="feature-box">
                    <figure>
                        <img src="../images/game-icon.png" alt=""/>
                    </figure>
                    <div className="feature-text">
                        <h3>In-Game Communication</h3>
                        <h4>Brand new Communication</h4>
                        <ul className="list width50">
                            <li>Direct Message</li>
                            <li>Video Conference</li>
                            <li>Interactive GIF’s</li>
                            <li>Record Yourself</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;