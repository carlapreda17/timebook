import * as Yup from 'yup';

export const validationSchemaWithOldPassword = Yup.object().shape({
  oldPassword: Yup.string().required('Acest camp este obligatoriu'),
  newPassword: Yup.string().required('Acest camp este obligatoriu'),
  confirmPassword: Yup.string()
    .required('Acest camp este obligatoriu')
    .oneOf([Yup.ref('newPassword'), null], 'Parolele trebuie sa fie identice'),
});

export const validationSchemaWithoutOldPassword = Yup.object().shape({
  newPassword: Yup.string().required('Acest camp este obligatoriu'),
  confirmPassword: Yup.string()
    .required('Acest camp este obligatoriu')
    .oneOf([Yup.ref('newPassword'), null], 'Parolele trebuie sa fie identice'),
});

export const initialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};
