import React from 'react';
import { Formik, Form, Field } from 'formik';
import { validationSchema, initialValues } from '../../models/addActivity';
import { Fieldset, Submit } from '../Formik';
import { Checkbox, Textarea, ActivityDuration } from '../Fields';
import ActivityDate from '../Activities/ActivityDate';
import InvisibleUserID from '../Activities/InvisibleUserID';
import { createActivity } from '../../api/activities';
import { toaster } from '../../lib';
import SelectProject from '../Fields/SelectProject';
import { useState } from 'react';

const AddTimeSheetEntry = ({ hideModal, id, refetch }) => {
  const handleSubmit = async (values, resetForm, setFieldValue) => {
    try {
      await createActivity(values);
      toaster.success('Activitatea a fost adaugata');
      if (checkbox) {
        refetch();
        let date = values.date;
        resetForm();
        setFieldValue('user', id);
        setFieldValue('date', date);
      } else {
        hideModal();
      }
    } catch (e) {
      toaster.error('Activitatea nu a putut fi adaugata');
      //eslint-disable-next-line
      console.log(e);
    }
  };
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="w-full p-4 bg-white rounded-lg max-w-xl px-6 dark:border dark:text-white dark:border-slate-800 dark:bg-slate-900">
      <h1 className="font-bold text-2xl mb-10">Adaugă o activitate</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, { resetForm, setFieldValue }) =>
          handleSubmit(values, resetForm, setFieldValue)
        }
      >
        <Form className="flex flex-col space-y-4">
          <div className="flex">
            <div className="w-1/2 mr-6">
              <ActivityDate />
            </div>
            <div className="w-1/2">
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
              autoComplete="off"
            />
          </Fieldset>

          <div className="flex justify-between sm:flex-row sm:justify-between mt-6">
            <Checkbox
              className="form-checkbox rounded-full mt-6"
              onChange={() => {
                setCheckbox(!checkbox);
              }}
            >
              <div className="w-40 mt-6 dark:text-slate-200">Continuă sa adaugi</div>
            </Checkbox>
            <div className="flex items-center gap-4">
              <button className="cancel" onClick={hideModal} type="reset">
                Anulează
              </button>
              <Submit className="confirm">Confirmă</Submit>
            </div>
          </div>
          <InvisibleUserID id={id} />
        </Form>
      </Formik>
    </div>
  );
};

export default AddTimeSheetEntry;
