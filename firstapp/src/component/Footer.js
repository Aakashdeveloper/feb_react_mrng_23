import React from 'react';

const Footer = (props) => {
    return(
        <>
            <hr/>
            <center>
                <h3>Developer Funnel {props.year} {props.month}</h3>
            </center>
        </>
    )
}

export default Footer;