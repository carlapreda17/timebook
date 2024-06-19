import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  answer: Yup.string().required('Alege o optiune'), // Required validation for the 'answer' field
});

export const initialValues = {
  answer: '',
};
