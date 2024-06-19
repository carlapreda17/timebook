import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  type: Yup.string().required('Acest camp este obligatoriu!'),
  title: Yup.string().required('Acest camp este obligatoriu!'),
  description: Yup.string(),
});

export const initialValues = {
  type: 'bug',
  title: '',
  description: '',
};
