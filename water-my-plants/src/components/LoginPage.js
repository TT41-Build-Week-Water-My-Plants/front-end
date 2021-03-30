import React, { useState, useEffect } from 'react';
import schema from '../validation/loginSchema';
import * as yup from 'yup';
// import axios from 'axios';
import styled from 'styled-components';

// const StyledButton = styled.button`
//     padding: 6px 10px;
//     margin: 5px;
//     border: none;
//     border-radius: 3px;
//     color: white;
// `

const SubmitButton = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: blue;
`;

// const StyledForm = styled.div`
//     border: 1px solid red;
// `;

const initialFormValues = {
  username: "",
  password: "",
  phoneNumber: ""
};

const initialFormErrors = {
  username: "",
  password: "",
  phoneNumber: ""
};

const initialUsers = [];
const initialDisabled = true;

export default function LoginPage(props) {

  // INITIAL FORM VALUES - Do I need to add all properties or just ones needed for login-page?
  

  // SET UP USEEFFECT ON THE SCHEMA


  // ADD STATE HERE
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  // NEW STATE FOR USERS
  const [users, setUsers] = useState(initialUsers);

  const inputChange = (name, value) => {
    // console.log('Test: ', name, value);
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: ""
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0] // formErrors[0]?
        })
        // console.log(err, formErrors);
      });
      setFormValues({
        ...formValues,
        [name]: value
      })
      // console.log(formErrors);
  };

  // const formSubmit = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('This is event: ', e.target);
    // SET FORMVALUES TO STATE
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      phoneNumber: formValues.phoneNumber.trim()
    };
    console.log(users)
    // setUser(newLogin);
    addUser(newLogin);
    console.log(users)
  };

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])

  const onChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    inputChange(name, value);
  };

  // ADD USER HELPER
  const addUser = (newUser) => {
    setUsers([...users, newUser]); // WHY DID THIS WORK HERE? -- this didn't work inside the onSubmit function, but works as a helper function
    setFormValues(initialFormValues);
  };

  // SHOULD POSTNEWUSER LOGIC BE IN THIS COMPONENT?

  return(
    <div className='login-container'>
      <h1>water my plants</h1>
      {/* <StyledForm> */}
        {/* CONFUSED WHY ADDING VALUES  */}
        <form className="form-container" onSubmit={ onSubmit }>
          <label htmlFor='username'>
            Username:
          </label>
          <input
              value={formValues.username}
              name='username'
              type='text'
              onChange={onChange}
          />
          <div>{ formErrors.username }</div>
          <label htmlFor='password'>
              Password:
          </label>
          <input
              value={formValues.password}
              name='password'
              type='password'
              onChange={onChange}
          />
          <div>{ formErrors.password }</div>
          <label htmlFor='password'>
              Phone Number:
          </label>
          <input
              value={formValues.phoneNumber}
              name='phoneNumber'
              type='text'
              onChange={onChange}
          />
          <div>{ formErrors.phoneNumber }</div>
          <SubmitButton disabled={disabled}>Sign In</SubmitButton>
          {/* <button id='submitBtn' disabled={ disabled }>sign in</button> */}
        </form>
      {/* </StyledForm> */}
    </div>
  )
};