import * as Yup from 'yup';

// Custom validation function to check for duplicate options
const uniqueOptions = (options) => {
  const seen = new Set();
  for (const option of options) {
    if (seen.has(option)) {
      return false; // Duplicate option found
    }
    seen.add(option);
  }
  return true; // No duplicates found
};

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Titlul este obligatoriu'),
  description: Yup.string(),
  question: Yup.string().required('Intrebarea este obligatorie!'),
  options: Yup.array()
    .of(Yup.string().required())
    .test('unique-options', 'Optiunile nu pot fi duplicate!', uniqueOptions)
    .min(2, 'Trebuie sa existe minim 2 optiuni!')
    .required(),
  priority: Yup.string().required('Prioritatea este obligatorie!'),
  daysUntilExpire: Yup.number()
    .integer('Perioada de expirare trebuie sa fie un numar intreg!')
    .min(1, 'Perioada de expirare trebuie sa fie mai mare sau egala cu 1!')
    .max(31, 'Perioada de expirare trebuie sa fie mai mica sau egala cu 31!')
    .required('Perioada de expirare este obligatorie!'),
});

export const editValidationSchema = Yup.object().shape({
  title: Yup.string().required('Titlul este obligatoriu'),
  description: Yup.string(),
  question: Yup.string().required('Intrebarea este obligatorie!'),
  options: Yup.array().of(Yup.object()).min(2).required('Trebuie sa existe minim 2 optiuni!'),
  priority: Yup.string().required('Prioritatea este obligatorie!'),
  daysUntilExpire: Yup.number()
    .integer('Perioada de expirare trebuie sa fie un numar intreg!')
    .min(1, 'Perioada de expirare trebuie sa fie mai mare sau egala cu 1!')
    .max(31, 'Perioada de expirare trebuie sa fie mai mica sau egala cu 31!')
    .required('Perioada de expirare este obligatorie!'),
  anonymous: Yup.boolean(),
});

export const initialValues = {
  title: '',
  description: '',
  question: '',
  options: [],
  priority: '',
  daysUntilExpire: 7,
  isAnonymous: false,
};
