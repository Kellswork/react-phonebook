import PropTypes from "prop-types";
import * as Yup from 'yup';


function PhonebookForm(props) {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <div>
            You are submitting the following:
            <ul>
              {Object.entries(props.formData).map(([name, value]) => (
                <li key={name}>
                  <strong>{name}</strong>:{value.toString()}
                </li>
              ))}
            </ul>
          </div>
          <label htmlFor='firstname'>
            First Name
            <input
              id='firstname'
              name='firstname'
              value={props.formData.firstname || ""}
              onChange={props.setFormData}
            />
          </label>
        </div>

        <label htmlFor='lastname'>
          Last Name
          <input
            id='lastname'
            name='lastname'
            value={props.formData.lastname || ""}
            onChange={props.setFormData}
          />
        </label>
        <div>
          <label htmlFor='phonenumber'>
            Phone Number
            <input
              id='phonenumber'
              name='phonenumber'
              value={props.formData.phonenumber || ""}
              onChange={props.setFormData}
            />
          </label>
        </div>
        <div>
          <button disabled={props.isSubmitting}>Submit</button>
        </div>
      </form>
    </div>
  );
}

PhonebookForm.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  phonenumber: PropTypes.number,
};

export default PhonebookForm;
