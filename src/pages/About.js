import React from 'react';
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div>
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>
                Premier projet en react afin d'y apprendre ses fonctionnalités
            </p>
            <br />
            <p> Réalisé via une vidéo formation de From Scratch sur Youtube</p>
        </div>
    );
};

export default About;