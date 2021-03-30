
import * as yup from 'yup';





export default yup.object().shape({
    username: yup
        .string('You must enter your username')
        .required('You must enter your username')
        .min(6, "Username must be at least 6 characters long."),
    phoneNumber: yup
      .string()
      .required("Must include phone number."),
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
  });
