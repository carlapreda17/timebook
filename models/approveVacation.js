import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  approved_duration: Yup.number()
    .required('Acest camp este obligatoriu!')
    .min(0.5, 'Numarul de zile nu poate fi mai mic de 0.5!')
    .max(100, 'Numarul nu poate fi mai mare de 100!'),
});
