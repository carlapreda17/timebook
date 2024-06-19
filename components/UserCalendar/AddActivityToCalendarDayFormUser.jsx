import { Formik, Form, Field } from 'formik';
import { validationSchema, initialValues } from '../../models/addUserActivity';
import { Fieldset, Submit } from '../Formik';
import { ActivityDuration, Checkbox, Textarea } from '../Fields';
import ActivityDate from '../Activities/ActivityDate';
import InvisibleUserId from '../../components/Activities/InvisibleUserID';
import SelectProject from '../Fields/SelectProject';
import { createActivity } from '../../api/activities';
import { toaster } from '../../lib';
import { useState } from 'react';

const AddActivityToCalendarDayFormUser = ({ hide, date, refetch, id }) => {
  const handleSubmit = async (values, resetForm, setFieldValue) => {
    try {
      await createActivity(values);
      toaster.success('Activitatea a fost adaugată');
      refetch();
      if (checkbox) {
        refetch();
        let date = values.date;
        resetForm();
        setFieldValue('user', id);
        setFieldValue('date', date);
      } else hide();
    } catch (e) {
      toaster.error('Activitatea nu a putut fi adaugată');
      //eslint-disable-next-line
      console.log(e);
    }
  };

  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="w-full p-6 bg-white rounded-lg max-w-xl dark:text-white dark:border dark:border-slate-800 dark:bg-slate-900">
      <h1 className="font-bold text-2xl mb-5 pb-2 border-b dark:border-b-slate-800">
        Adaugă o activitate
      </h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ ...initialValues, date: date }}
        onSubmit={(values, { resetForm, setFieldValue }) =>
          handleSubmit(values, resetForm, setFieldValue)
        }
      >
        <Form className="flex flex-col space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <ActivityDate />
            <ActivityDuration />
          </div>
          <SelectProject />
          <Fieldset name="description" label="Descriere">
            <Field id="description" name="description" as={Textarea} rows={2} />
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
            <div className="flex sm:items-end flex-col sm:flex-row sm:gap-3 font-medium">
              <button className="cancel" onClick={hide} type="button">
                Anulează
              </button>
              <Submit className="confirm grow">Confirmă</Submit>
            </div>
          </div>
          <InvisibleUserId id={id} />
        </Form>
      </Formik>
    </div>
  );
};

export default AddActivityToCalendarDayFormUser;
