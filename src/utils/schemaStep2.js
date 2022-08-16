import * as yup from 'yup';

export const schemaStep2 = yup.object().shape({
    email: yup
        .string()
        .email('Email should have correct format')
        .max(50, 'Maximum 50 letters')
        .required('Email is a required field'),
});
