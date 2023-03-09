import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <>
            <footer>
            <hr/>
            <h2>&copy; Developer Funnel</h2>
            <div className="footDiv">
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="footDiv">
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="footDiv noBorder">
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
        </footer>
        </>
    )
}

export default Footer;