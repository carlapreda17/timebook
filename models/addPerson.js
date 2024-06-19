import { differenceInYears, subYears } from 'date-fns';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Acest camp este obligatoriu'),
  last_name: Yup.string().required('Acest camp este obligatoriu!'),
  birthday: Yup.date()
    .test('birthday', 'Persoana trebuie sa aiba minim 18 ani!', function (value) {
      return differenceInYears(new Date(), new Date(value)) >= 18;
    })
    .test('birthday', 'Persoana poate avea maxim 65 de ani!', function (value) {
      return differenceInYears(new Date(), new Date(value)) <= 65;
    })
    .required('Acest camp este obligatoriu!'),
  email: Yup.string()
    .email('Adresa de e-mail este invalida!')
    .required('Acest camp este obligatoriu!'),
  job: Yup.string().required('Acest camp este obligatoriu!'),
  password: Yup.string()
    .min(6, 'Parola trebuie sa aiba minim 6 caractere!')
    .required('Acest camp este obligatoriu!'),
  password_confirm: Yup.string()
    .required('Acest camp este obligatoriu!')
    .oneOf([Yup.ref('password'), null], 'Parolele trebuie sa fie identice!'),
});

export const initialValues = {
  first_name: '',
  last_name: '',
  birthday: subYears(new Date(), 18),
  email: '',
  job: '',
  password: '',
  password_confirm: '',
};
