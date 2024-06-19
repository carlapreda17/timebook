import { differenceInYears } from 'date-fns';
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
});
