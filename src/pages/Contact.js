import React from 'react';
import Form from '../components/Form';
import formConfig from '../json/formConfig.json'

function Contact() {
    return (
        <Form formConfig={formConfig}/>
    )
}
 export default Contact