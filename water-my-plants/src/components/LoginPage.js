import React, { useState, useEffect } from 'react';
import schema from '../validation/loginSchema';
import * as yup from 'yup';
import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import image from '../assets/background.jpg'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
    /* In order for layout border you have to comment this out, because selecting the element
    by it's name is more specific than the universal selector */
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  box-sizing: border-box;
	max-width: 100%;
}

html {
	font-size: 62.5%;
}

body {
  line-height: 1.5;
  /* rems calculated off of the font size on HTML */
  font-size: 1.8rem;
  color: #4f4f4f;
  height: 100vh;
}
`

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url(${image});
`

const LoginContainer = styled.div`
  border: 3px solid lightgray;
  background-color: #f5f5f5;
  border-bottom: 3px solid darkgray;
  padding: 5rem;
  border-radius: 7px;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 30%;
`

const Div = styled.div`
  font-size: 1.2rem;
  color: red;
  padding-bottom: 1.2rem;
`

const Title = styled.h1`
  color: #909090;
  letter-spacing: 2px;
  text-align: center;
  font-size: 5rem;
  padding: 2rem;
  font-family: sans-serif;
`

const Label = styled.label`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Input = styled.input`
  border-radius: 3px;
`

const SubmitButton = styled.button`
  background-color: #78e08f;
  display: block;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  margin: 0 auto;
`
const SignUpLink = styled.a`
  display: block;
  padding: 1rem;
  text-align: center;
  font-size: 16px;
  border-radius: 5px;
  margin: 0 auto;
`

const initialFormValues = {
  username: "",
  password: "",
  phone_number: ""
};

const initialFormErrors = {
  username: "",
  password: "",
  phone_number: ""
};

const initialUsers = [];
const initialDisabled = true;

export default function LoginPage(props) {

  // INITIAL FORM VALUES - Do I need to add all properties or just ones needed for login-page?
  

  // SET UP USEEFFECT ON THE SCHEMA


  // ADD STATE HERE
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  // NEW STATE FOR USERS
  const [users, setUsers] = useState(initialUsers);

  const { push } = useHistory();

  // const inputChange = (name, value) => {
  //   // console.log('Test: ', name, value);
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then(() => {
  //       setFormErrors({
  //         ...formErrors, [name]: ""
  //       });
  //     })
  //     .catch((err) => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: err.errors[0] // formErrors[0]?
  //       })
  //       // console.log(err, formErrors);
  //     });
  //     setFormValues({
  //       ...formValues,
  //       [name]: value
  //     })
  //     // console.log(formErrors);
  // };

  // const formSubmit = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('This is event: ', e.target);
    // SET FORMVALUES TO STATE

    axios
    .post('https://plants-buildweek41.herokuapp.com/api/auth/login', users)
    .then((res) => {
        localStorage.setItem('token', res.data.token);
        push('./plants');
        console.log(res.data.token);
    })
    .catch((err) => {
        console.log('Username or password not valid.', err);
    })

    // const newLogin = {
    //   username: formValues.username.trim(),
    //   password: formValues.password.trim(),
    //   phoneNumber: formValues.phoneNumber.trim()
    // };
    // console.log(users)
    // // setUser(newLogin);
    // addUser(newLogin);
    // console.log(users);
    // push('/plants');
  };

  // useEffect(() => {
  //   schema.isValid(formValues).then(valid => {
  //     setDisabled(!valid);
  //     console.log(disabled);
  //   });
  // }, [formValues])

  const onChange = (e) => {
    // const { name, value } = e.target;
    // // console.log(name, value);
    // inputChange(name, value);
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    })
  };

  // ADD USER HELPER
  // const addUser = (newUser) => {
  //   setUsers([...users, newUser]); // WHY DID THIS WORK HERE? -- this didn't work inside the onSubmit function, but works as a helper function
  //   setFormValues(initialFormValues);
  // };

  // SHOULD POSTNEWUSER LOGIC BE IN THIS COMPONENT?

  return(
    <Container>
      <GlobalStyle />
      <LoginContainer>
      <Title>water my plants</Title>
      {/* <StyledForm> */}
        {/* CONFUSED WHY ADDING VALUES  */}
        <form onSubmit={ onSubmit }>
          <Label htmlFor='username'>
            Username:
          </Label>
          <Input
              value={users.username}
              name='username'
              type='text'
              onChange={onChange}
          />
          {/* <Div>{ formErrors.username }</Div> */}
          <Label htmlFor='password'>
              Password:
          </Label>
          <Input
              value={users.password}
              name='password'
              type='password'
              onChange={onChange}
          />
          {/* <Div>{ formErrors.password }</Div> */}
          <Label htmlFor='password'>
              Phone Number:
          </Label>
          <Input
              value={users.phone_number}
              name='phone_number'
              type='text'
              onChange={onChange}
          />
          {/* <Div>{ formErrors.phoneNumber }</Div> */}
          <SubmitButton >Sign In</SubmitButton>
          <SignUpLink href='#'>Create an Account</SignUpLink>
          {/* <button id='submitBtn' disabled={ disabled }>sign in</button> */}
        </form>
      </LoginContainer>
    </Container>
  )
};