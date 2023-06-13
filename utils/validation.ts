import * as yup from "yup";

export const schemaSignUp = yup.object({
    username: yup
      .string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters')
      .max(20, 'Username must not exceed 20 characters')
      .matches(/^\w+$/, 'Username can only contain letters, numbers, and underscores'),
    
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email address'),
    
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
});