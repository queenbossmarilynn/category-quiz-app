import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer' style={{ textAlign: 'center', marginBottom: 10}}>
        Made with 🤍 by {" "}
        <a
            href="https://www.youtube.com/@SweetCreationStudios"
            style={{ cursor: "pointer"}}
        >
            Sweet Creation Studios
        </a>
    </div>
  )
}

export default Footer