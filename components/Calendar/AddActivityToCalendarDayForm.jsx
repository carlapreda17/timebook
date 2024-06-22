import { Formik, Form, Field } from 'formik';
import { validationSchema, initialValues } from '../../models/addActivity';
import { ActivityDuration, Checkbox, Textarea } from '../Fields';
import SelectProject from '../Fields/SelectProject';
import SelectPerson from '../Fields/SelectPerson';
import { Fieldset, Submit } from '../Formik';
import ActivityDate from '../Activities/ActivityDate';
import InvisibleUserId from '../../components/Activities/InvisibleUserID';
import { createActivity } from '../../api/activities';
import { toaster } from '../../lib';
import { useState } from 'react';

const AddActivityToCalendarDayForm = ({ hide, date, refetch, role, userId }) => {
  const handleSubmit = async (values, resetForm, setFieldValue) => {
    try {
      await createActivity(values);
      toaster.success('Activitatea a fost adaugata');
      if (checkbox) {
        let date = values.date;
        resetForm();
        setFieldValue('date', date);
        if (role === 'user') setFieldValue('user', userId);
      } else if (typeof hide === 'function') {
        hide();
      }
      refetch();
    } catch (e) {
      toaster.error('Activitatea nu a putut fi adaugata');
      // eslint-disable-next-line
      console.log(e);
    }
    return;
  };
  const [checkbox, setCheckbox] = useState(false);
  return (
    <div className="w-full p-6 bg-white rounded-lg max-w-xl dark:text-white dark:border dark:border-slate-800 dark:bg-slate-900">
      <h1 className="font-bold text-2xl mb-5 pb-2 border-b dark:border-b-slate-800">
        Adaugă o activitate
      </h1>
      <Formik
        initialValues={{ ...initialValues, date: date }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setFieldValue }) =>
          handleSubmit(values, resetForm, setFieldValue)
        }
      >
        <Form className="flex flex-col space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <ActivityDate/>
            <ActivityDuration/>
          </div>
          {role === 'admin' && <SelectPerson/>}
          <SelectProject/>
          <Fieldset name="description" label="Descriere">
            <Field id="description" name="description" as={Textarea} rows={2} autoComplete="off"/>
          </Fieldset>

          <div className="flex justify-between flex-col sm:flex-row sm:justify-between gap-4">
            <Checkbox
              onChange={() => {
                setCheckbox(!checkbox);
              }}
              className="form-checkbox rounded mt-6"
            >
              <div className="w-40 mt-6">Continuă să adaugi</div>
            </Checkbox>
            <div className="flex sm:items-end flex-col sm:flex-row gap-3 font-medium">
              <button className="cancel" onClick={hide} type="reset">
                Anulează
              </button>
              <Submit className="confirm grow">Confirmă</Submit>
            </div>
          </div>
          {role === 'user' && <InvisibleUserId id={userId}/>}
        </Form>
      </Formik>
    </div>
  );
};

export default AddActivityToCalendarDayForm;
