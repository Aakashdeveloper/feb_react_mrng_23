import React from 'react';

const Footer = (props) => {
    return(
        <>
            <hr/>
            <center>
                <h3>Developer Funnels {props.year} {props.month}</h3>
            </center>
        </>
    )
}

export default Footer;