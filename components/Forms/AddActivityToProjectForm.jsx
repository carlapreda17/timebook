import { Formik, Form, Field } from 'formik';
import { Checkbox, Textarea, ActivityDuration } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/addActivity';
import SelectPerson from '../Fields/SelectPerson';
import { createActivity } from '../../api/activities';
import { toaster } from '../../lib';
import ActivityDate from '../Activities/ActivityDate';
import InvisibleProjectID from '../Activities/InvisibleProjectID';
import { useState } from 'react';

const AddActivityToProjectForm = ({ hideModal, projectId }) => {
  const handleSubmit = async (values, resetForm, setFieldValue) => {
    try {
      await createActivity(values);
      toaster.success('Activitatea a fost adaugata');
      if (checkbox) {
        let date = values.date;
        resetForm();
        setFieldValue('project', projectId);
        setFieldValue('date', date);
      } else if (typeof hideModal === 'function') {
        hideModal();
      }
    } catch (e) {
      toaster.error('Activitatea nu a putut fi adaugata');
      //eslint-disable-next-line
      console.log(e);
    }
    return;
  };

  const [checkbox, setCheckbox] = useState(false);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ ...initialValues }}
      onSubmit={(values, { resetForm, setFieldValue }) =>
        handleSubmit(values, resetForm, setFieldValue)
      }
    >
      <div className="p-8 rounded-lg">
        <Form className="space-y-4">
          <div className="flex gap-8">
            <div className="w-80">
              <ActivityDate />
            </div>
            <div className="">
              <ActivityDuration />
            </div>
          </div>
          <SelectPerson></SelectPerson>
          <Fieldset name="description" label="Descriere">
            <Field
              id="description"
              name="description"
              as={Textarea}
              className="textarea"
              autoComplete="off"
            />
          </Fieldset>

          <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-4 sm:justify-between">
            <Checkbox
              onChange={() => {
                setCheckbox(!checkbox);
              }}
              className="form-checkbox rounded-full"
            >
              <span className="pl-2 dark:text-white">Continuă să adaugi</span>
            </Checkbox>
            <div className="flex gap-4">
              <button className="cancel" onClick={hideModal} type="reset">
                Anulează
              </button>
              <Submit className="confirm">Confirmă</Submit>
            </div>
          </div>
          <InvisibleProjectID id={projectId} />
        </Form>
      </div>
    </Formik>
  );
};

export default AddActivityToProjectForm;
