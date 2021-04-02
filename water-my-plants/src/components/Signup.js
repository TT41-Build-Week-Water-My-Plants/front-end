import React, {useState, useEffect} from 'react'
import schema from '../validation/signupSchema'
import * as yup from 'yup'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialForm = {
  username: '',
  phone_number: '',
  password: '',
}

const initialFormErrors = {
  username: '',
  phone_number: '',
  password: '',
}

const initialDisabled = true

export default function Signup () {

const [user, setUser] = useState(initialForm);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);
const { push } = useHistory();

// const updateForm = (inputName, inputValue) =>{
//   yup
//   .reach(schema, inputName)

//   .validate(inputValue)
//   .then(() => {
//     setFormErrors({
//       ...formErrors, [inputName]: "",
//     });
//   })
//   .catch(err => {
//     setFormErrors({
//       ...formErrors, [inputName]: err.errors[0],
//     });
//   });

//   setFormValues({...formValues, [inputName]: inputValue,})

// };

// const submitForm = () =>{

//   const newMember =  {
//     username: formValues.username.trim(),
//     phoneNumber: formValues.phoneNumber.trim(),
//     password: formValues.password.trim(),
  
//   }
//   setFormValues(newMember)
//   console.log(newMember)
// }
// useEffect(() => {
//   schema.isValid(formValues).then(valid => {
//     setDisabled(!valid);
//   });
// }, [formValues])



//     const onChange = evt => {
    
//        const {name, value} = evt.target

//        updateForm(name, value)
      
//     }

//     const onSubmit = evt => {

//         evt.preventDefault()
//         submitForm()
//         setFormValues(initialForm)
//         push('/login');
//     }

const onChange = (e) => {
  setUser({
    ...user,
    [e.target.name]: e.target.value
  })}

  const onSubmit = (e) => {
    e.preventDefault();
    axios
    .post('https://plants-buildweek41.herokuapp.com/api/auth/register', user)
    .then((res) => {
      push('./plants');
      console.log(res.data);
    })
    .catch((err) =>{
      console.log('Username or password not valid, must be unique username.', err);
    })
  }

return (
  <form className = 'form container' onSubmit={onSubmit}>
          <h1>Signup!</h1>
            <div className = 'formInputs'>
              <div className = 'username'>
                <label>Username
                    <StyledInput
                        name='username'
                        type = 'text' 
                        value = {user.username}
                        onChange={onChange}
                        placeholder='Type username'
                        maxLength = '30'
                        />
                </label>
              </div>
              <div className = 'phone_number'>
                <label>Phone Number
                    <StyledInput name = 'phone_number' 
                    type = 'tel'
		    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    value = {user.phone_number}
                    onChange = {onChange}
                    placeholder = '###-###-####'/>
                </label>
                </div>
                <div className = 'username'>
                <label>Password
                    <StyledInput
                        name='password'
                        type = 'text' 
                        value = {user.password}
                        onChange={onChange}
                        placeholder='Type Password'
                        maxLength = '30'
                        />
                </label>
                </div>


                <div className = 'submit'>
                    <StyledButton>Submit</StyledButton>
                </div>
			            <StyledErrors className='errors'>
                    
                        <div>{formErrors.username}</div>
                        <div>{formErrors.phoneNumber}</div>
                        <div>{formErrors.password}</div>
                  </StyledErrors>
            </div>
        </form>


    )


}

const StyledButton = styled.button`
font-family: 'Handlee', cursive;
padding:1% 3%;
font-size: 1.6rem;
border-radius:6px;
border:2px solid #626262;
box-shadow: 2px 2px 1px #626262;
transition: 1s;
margin: 2rem;

&:hover{
    background-color:#626262;
    border:2px solid white;
    color:white;
    box-shadow: 2px 2px 1px white;
}
`
const StyledErrors = styled.div`
color: red;


`

const StyledInput = styled.input`
border-radius:6px;
margin:1rem;
border: 1px solid black;
font-family: 'Handlee', cursive;

`
