import React from "react";
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerContainer">
        <div className="footerDiv">© CryptoCoin 2022</div>
        <div className="footerDiv">
            <a target="_blank" href="https://facebook.com/"><FaFacebookF/></a>
            <a target="_blank" href="https://twitter.com/"><FaTwitter/></a>
            <a target="_blank" href="https://www.instagram.com/"><FaInstagram/></a>
            <a target="_blank" href="https://www.youtube.com/"><FaYoutube/></a>
        </div>
        <div className="footerDiv">CryptoCoin.cz</div>
    </div>
  )
}

export default Footer