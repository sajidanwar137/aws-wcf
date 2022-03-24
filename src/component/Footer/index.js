import React from 'react';
import { FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa';
import './style.scss'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="socials">
                                <a href="https://twitter.com/WCFplay" rel="noreferrer" target="_blank"><FaTwitter/></a>
                                <a href="https://www.instagram.com/worldchampionfantasy/" rel="noreferrer" target="_blank"><FaInstagram/></a>
                                <a href="https://www.tiktok.com/@worldchampfantasy?lang=en" rel="noreferrer" target="_blank"><img src="../images/tiktok-icon.png" alt="Tiktok"/></a>
                                <a href="https://discord.gg/Svjwgb4gfa" rel="noreferrer" target="_blank"><img src="../images/discord-icon.png" alt="Discord"/></a>
                                <a href="https://www.twitch.tv/world_champion_fantasy" rel="noreferrer" target="_blank"><img src="../images/twitch-icon.png" alt="Twitch"/></a>
                            </div>
                            <div className="copy-right">
                                <p>Copyright @ World Champion Fantasy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;