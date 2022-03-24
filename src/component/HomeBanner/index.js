import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom'
import { FaInstagram,FaTwitter } from 'react-icons/fa';
import militaryVideo from '../../videos/military.mp4';
import './style.scss'

const HomeBanner = ({onOpenModal}) => {
return(
    <div className="banner">
        <div className="container">
            <div className="row banner-inner">
                <div className="offset-lg-1 col-lg-6 col-md-6 banner-left text-center">
                    <div className="banner-logo">
                        <img src="../images/banner-logo.png" alt="banner-logo"/>
                    </div>
                    <h1>Bringing Fantasy Sports to Life</h1>
                    <p>The Next Generation of Fantasy Sports</p>
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
                    <div className="socials">
                        <a href="https://twitter.com/WCFplay" rel="noreferrer" target="_blank"><FaTwitter/></a>
                        <a href="https://www.instagram.com/worldchampionfantasy/" rel="noreferrer" target="_blank"><FaInstagram/></a>
                        <a href="https://www.tiktok.com/@worldchampfantasy?lang=en" rel="noreferrer" target="_blank"><img src="../images/tiktok-icon.png" alt="Tiktok"/></a>
                        <a href="https://discord.gg/Svjwgb4gfa" rel="noreferrer" target="_blank"><img src="../images/discord-icon.png" alt="Discord"/></a>
                        <a href="https://www.twitch.tv/world_champion_fantasy" rel="noreferrer" target="_blank"><img src="../images/twitch-icon.png" alt="Twitch"/></a>
                    </div>
                </div>
                <div className="offset-lg-1 col-lg-3 col-md-6 banner-right">
                    <ReactPlayer
                        url={militaryVideo}
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
            </div>
        </div>
    </div>
)
}

export default HomeBanner;