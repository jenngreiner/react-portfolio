import React from 'react';
import Jobs from '../components/Jobs';
import jobsList from "../json/jobs.json";
import "../styles/css/jobs.css"


function Experience() {
    return (
        <><div>
            I'm a User Interface Engineer with 1+ years of experience creating user-friendly interfaces for web and mobile apps. I have a strong understanding of user experience principles and a talent for creating intuitive and visually appealing designs. I'm well-versed in HTML, CSS, JavaScript, and front-end frameworks like React and Angular. I've conducted user research and testing, and I'm familiar with agile development methodologies. I have a proven track record of delivering high-quality, responsive, and accessible interfaces that meet both business and user needs. I work well with cross-functional teams, including designers, developers, and product managers, and I love collaborating to bring great ideas to life.
        </div>
            <Jobs jobs={jobsList} />
        </>
    );
};

export default Experience;