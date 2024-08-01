import React from "react";
import Chip from "./Chip.js";


function Jobs(props) {
    console.log(props)
    return (
        <div className="container" id="portfolio">
            {props.jobs.map(job => (
                <div className="job-container">
                    <div className="job-header">
                        <div className="image-role-dates">
                            <img
                                src={job.image}
                                className="job-image"
                                alt={job.company}
                            />
                            <div className="role-dates">
                                <div className="role">{job.role}</div>
                                <div className="dates">{job.dates}</div>
                            </div>
                        </div>
                        <div className="company-location">
                            <div className="company">{job.company}</div>
                            <div className="location">{job.location}</div>
                        </div>
                    </div>
                    <ul className="duties-container">
                        {job.duties.map(duty => (
                            <li>{duty}</li>
                        ))}
                    </ul>
                    <div className="chip-container">
                        {job.skills.map(skill => (
                            <Chip chipName={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Jobs