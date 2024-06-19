import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  startDate: Yup.date().required('Acest camp este obligatoriu!'),
  endDate: Yup.date().required('Acest camp este obligatoriu!'),
  amount: Yup.number().required('Acest camp este obligatoriu!'),
  description: Yup.string().required('Acest camp este obligatoriu!'),
  user: Yup.string().required('Acest camp este obligatoriu!'),
});

export const initialValues = {
  startDate: '',
  endDate: '',
  amount: '',
  description: '',
  user: '',
};
