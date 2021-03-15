import React from 'react';

import jedox from '../img/logos/jedox.svg';
import powerbi from '../img/logos/powerbi.jpg';
import snowflake from '../img/logos/snowflake.png';
import qlik from '../img/logos/qlik.png';

import Fade from "react-reveal/Fade";

export default function Brands() {
    return (
        <div className="brandsWrapper">
            <Fade bottom>
            <div className="brand">
                <img src={qlik} alt='qlik sense logo'></img>
            </div>
            <div className="brand">
                <img src={jedox} alt='jedox logo'></img>
            </div>
            <div className="brand">
                <img src={powerbi} alt='powerbi logo'></img>
            </div>
            <div className="brand">
                <img src={snowflake} alt='snowflake logo'></img>
            </div>
            </Fade>
        </div>
    )
}
