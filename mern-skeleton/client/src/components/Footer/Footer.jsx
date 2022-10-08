import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div>Contact Us</div>
    <div className="social-container">
      <a href="" target="_blank" rel="noopener noreferrer"
        className="fa-2xs youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer"
        className="fa-2xs facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="" className="fa-2xs twitter social" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer"
        className="fa-2xs instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>
    </footer>
  )
}

export default Footer