import React from 'react';
import rishabhProfile from '../Images/rishabhProfile.jpg';
function About(){
return(
    <>
     <section id="about-section">
     <section id="about-me">
     <img id="About-image" src={rishabhProfile} alt="About"/>

    <p id="my-info">
        My name is Rishabh Rajendar Thakur. 
        In addition to being a web developer, my interests include anime, cricket, and sketching. 
        I'm an anime enthusiast that is eager to savor every second of life. 
        I love cricket, and I'm prepared to take on life's curve-balls. 
        As a sketch artist, I think it's important to sketch my own destiny. 
        Life is similar to asynchronous coding as there are instances when you must use async and wait for a solution.
    </p>
     </section>
     </section>
    </>
);
}
export default About;