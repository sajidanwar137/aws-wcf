import React from 'react';
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';
import runningVideo from '../../videos/running.mp4';
import './style.scss'

const BrandNew = ({onOpenModal}) => {
return(
    <div className="brand-outer section">
        <div className="container">
            <div className="row brand-inner">
                <div className="offset-lg-1 col-lg-3 col-md-6 brand-left">
                    <ReactPlayer
                        url={runningVideo}
                        controls={true}
                        loop={true}
                        playing={true}
                        muted ={true}
                        config = {{ file: { attributes: {
                            autoPlay: 'autoPlay'
                        }}}}
                        className="video-outer"
                    />
                </div>
                <div className="offset-lg-1 col-lg-6 col-md-6 brand-right text-center">
                    <h3 className="heading1">A Brand new <br/>ESPORTS Experience</h3>
                    <p>Join us on a new adventure. Whether you're just getting started or have years of experience. Interact with experts  to develop  the competitive mindset. Experience the best user experience. Customize your esports game. Our brand new user experience brings fantasy games to life so you can focus on winning games, with style!</p>
                    <ul className="apps">
                        <li>
                        <Link to="" onClick={onOpenModal}>
                            <img src="../images/app-store.png" alt="app-store"/>
                        </Link>
                        </li>
                        <li>
                        <Link to="" onClick={onOpenModal}>
                            <img src="../images/google-play.png" alt="google-play"/>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
}

export default BrandNew;