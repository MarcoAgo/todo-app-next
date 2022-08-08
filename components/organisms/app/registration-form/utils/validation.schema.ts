import * as yup from 'yup'
import YupPassword from "yup-password";
YupPassword(yup)

export const registrationFormValidation = yup.object({
    name: yup.string().required('Field must be a string'),
    surname: yup.string().required('Field must be a string'),
    email: yup.string().email().required('Field must be a string'),
    password: yup.string().required('Field must be a string')
        .min(8, 'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special')
        .minLowercase(1, 'password must contain at least 1 lower case letter')
        .minUppercase(1, 'password must contain at least 1 upper case letter')
        .minNumbers(1, 'password must contain at least 1 number')
        .minSymbols(1, 'password must contain at least 1 special character'),
    repeat_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})
