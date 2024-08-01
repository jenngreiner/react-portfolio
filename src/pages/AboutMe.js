import React from 'react';
import Form from '../components/Form';
import formConfig from '../json/formConfig.json'

function AboutMe() {
    return (
        <><h3 className='aboutMe'>
            I'm a User Interface Engineer with 1+ years of experience creating user-friendly interfaces for web and mobile apps. I have a strong understanding of user experience principles and a talent for creating intuitive and visually appealing designs. I'm well-versed in HTML, CSS, JavaScript, and front-end frameworks like React and Angular. I've conducted user research and testing, and I'm familiar with agile development methodologies. I have a proven track record of delivering high-quality, responsive, and accessible interfaces that meet both business and user needs. I work well with cross-functional teams, including designers, developers, and product managers, and I love collaborating to bring great ideas to life.
        </h3><Form formConfig={formConfig} /></>
    )
}
export default AboutMe