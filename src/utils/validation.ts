import * as yup from 'yup';

export const hospitalSchema = yup.object().shape({
  name: yup.string().required('Hospital name is required'),
  address: yup.string().required('Address is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number is not valid')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Email is required'),
  services: yup.string().required('Services information is required'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});