import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Numele este obligatoriu'),
  active: Yup.boolean(),
  important: Yup.boolean(),
  urgent: Yup.boolean(),
  description: Yup.string().required('Descrierea este obligatorie'),
  status: Yup.string().required('Statusul este obligatoriu'),
  icon: Yup.string(),
  design_color: Yup.string(),
});

export const initialValues = {
  name: '',
  description: '',
  status: '',
  active: true,
  important: false,
  urgent: false,
  icon: '',
  design_color: '#FFCCFF',
};
