import React from 'react';
function About({ imgSrc, aboutText }){
    return(
    <aside>
        <img src={imgSrc || 'https://via.placeholder.com/215'}></img>
    </aside>

    )
}
export default About