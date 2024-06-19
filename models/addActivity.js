import * as Yup from 'yup';
import differenceInDays from 'date-fns/differenceInDays';
import format from 'date-fns/format';
import endOfDay from 'date-fns/endOfDay';

export const validationSchema = Yup.object().shape({
  user: Yup.string().required('Acest camp este obligatoriu!'),
  project: Yup.string().required('Acest camp este obligatoriu!'),
  description: Yup.string().required('Acest camp este obligatoriu!'),
  duration: Yup.number()
    .required('Acest camp este obligatoriu!')
    .moreThan(15, 'Format invalid!')
    .lessThan(960, 'Format invalid!'),
  date: Yup.date()
    .test('project_date', 'Data nu poate fi in viitor!', function (value) {
      return differenceInDays(new Date(), new Date(value)) >= 0;
    })
    .required('Acest camp este obligatoriu!'),

  durationString: Yup.string(),
});

export const initialValues = {
  user: '',
  project: '',
  description: '',
  duration: '',
  date: format(endOfDay(new Date()), 'yyyy-MM-dd'),
  durationString: '',
};
