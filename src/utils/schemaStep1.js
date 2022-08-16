import * as yup from 'yup';

export const schemaStep1 = yup.object().shape({
    firstName: yup
        .string()
        .matches(
            /^[a-zA-Z '.-]*$/,
            'First name should not contain number or symbols'
        )
        .max(30, 'Maximum 30 letters')
        .required('First name is a required field'),
    lastName: yup
        .string()
        .matches(
            /^[a-zA-Z '.-]*$/,
            'Last name should not contain number or symbols'
        )
        .max(30, 'Maximum 30 letters')
        .required('Last name is a required field'),
});
