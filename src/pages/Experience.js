import React from 'react';
import Jobs from '../components/Jobs';
import jobsList from "../json/jobs.json";
import "../styles/css/jobs.css"


function Experience() {
    return (
        <Jobs jobs={jobsList} />
    )
}

export default Experience