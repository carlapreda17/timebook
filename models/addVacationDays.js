import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .min(1, 'Trebuie sa adaug minim o zi!')
    .required('Acest camp este obligatoriu!'),
  type: Yup.string().required('Acest camp este obligatoriu!'),
  description: Yup.string().required('Acest camp este obligatoriu!'),
  user: Yup.string().required('Acest camp este obligatoriu!'),
});

export const initialValues = {
  amount: '',
  type: '',
  description: '',
  user: '',
};
