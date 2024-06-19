import React from 'react';
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

const AddUserTimeSheetEntry = ({ hideModal, id, refetch }) => {
  const handleSubmit = async (values, resetForm, setFieldValue) => {
    try {
      await createActivity(values);
      toaster.success('Activitatea a fost adaugată');
      if (checkbox) {
        refetch();
        let date = values.date;
        resetForm();
        setFieldValue('user', id);
        setFieldValue('date', date);
      } else hideModal();
    } catch (e) {
      toaster.error('Activitatea nu a putut fi adaugată');
      //eslint-disable-next-line
      console.log(e);
    }
  };

  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="w-full p-4 bg-white rounded-lg max-w-xl px-6 dark:text-white dark:border dark:border-gray-500 dark:bg-slate-900">
      <h1 className="font-bold text-2xl mb-10">Adaugă o activitate</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, { resetForm, setFieldValue }) =>
          handleSubmit(values, resetForm, setFieldValue)
        }
      >
        <Form className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mr-6">
              <ActivityDate />
            </div>
            <div className="w-full md:w-1/2">
              <ActivityDuration />
            </div>
          </div>
          <SelectProject></SelectProject>
          <Fieldset name="description" label="Descriere">
            <Field
              id="description"
              name="description"
              as={Textarea}
              rows={2}
              className="textarea"
            />
          </Fieldset>
          <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-4 sm:justify-between">
            <Checkbox
              onChange={() => {
                setCheckbox(!checkbox);
              }}
              className="form-checkbox rounded"
            >
              <div className="dark:text-white">Continuă să adaugi</div>
            </Checkbox>
            <div className="flex sm:items-end flex-col sm:flex-row sm:gap-3 font-medium">
              <button className="cancel" onClick={hideModal} type="button">
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

export default AddUserTimeSheetEntry;
