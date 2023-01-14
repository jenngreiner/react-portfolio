import React, {useState} from "react";
import axios from "axios";
import PageTitle from "./PageTitle";

function Form(props) {
  console.log(props);

  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});



  const handleSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: props.formConfig.api,
      headers: { 'content-type': 'application-json'},
    data: formData
    })
    .then(result => {
      this.setState({
        mailSent: result.data.sent
      })
    })
    .catch(error => this.setState({error: error.message}))
  };

  const handleChange = (e, field) => {
    let value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const { successMessage, errorMessage, fieldsConfig } = props.formConfig;

  return (
      <div className="container" id="contact-me">
        <div className="row">
          <div className="col-xs-12 justify-content-center">
            <PageTitle title="Contact Me"/>
            <form action="#">
              {
                fieldsConfig && fieldsConfig.map(field => {
                  return (
                    <div key={field.id}>
                      {field.type !== "textarea" ? (
                        <div>
                        <label>{field.label}</label>
                        <input
                          type={field.type}
                          className={field.klassName}
                          placeholder={field.placeholder}
                          value={field.name}
                          onChange={e => handleChange(e, field.fieldName)}
                        />
                      </div>
                    ) : (
                      <div>
                        <label>{field.label}</label>
                        <textarea className={field.klassName} placeholder={field.placeholder} onChange={e => handleChange(e, field.fieldName)} value={field.name} />
                      </div>
                      )}
                    </div>
                  )
                })
              }
              <input type="submit" onClick={e => handleSubmit(e)} value="Submit" />
              <div>
                {mailSent && <div className="success">{successMessage}</div>}
                {error && <div className="error">{errorMessage}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Form;
