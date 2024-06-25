import { Formik, Form, Field } from 'formik';
import { validationSchema, initialValues } from '../../models/addActivity';
import { ActivityDuration, Checkbox, Textarea } from '../Fields';
import SelectProject from '../Fields/SelectProject';
import SelectPerson from '../Fields/SelectPerson';
import { Fieldset, Submit } from '../Formik';
import ActivityDate from '../Activities/ActivityDate';
import { createActivity } from '../../api/activities';
import { toaster } from '../../lib';
import { useState } from 'react';
import InvisibleProjectID from "../Activities/InvisibleProjectID";

const AddActivityForm = ({ hideModal, projectId,userId }) => {
  const handleSubmit = async (values, resetForm, setFieldValue) => {
    try {
      await createActivity(values);
      toaster.success('Activitatea a fost adaugata');
      if (checkbox) {
        let date = values.date;
        resetForm();
        setFieldValue('date', date);
        if(projectId)
          setFieldValue('project', projectId);
        if(userId)
          setFieldValue('user', userId);
      } else if (typeof hideModal === 'function') {
        hideModal();
      }
    } catch (e) {
      toaster.error('Activitatea nu a putut fi adaugata');
      // eslint-disable-next-line
      console.log(e);
    }
    return;
  };

  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className="w-full p-4 bg-white rounded-lg max-w-xl px-6 dark:text-white dark:border dark:border-gray-500 dark:bg-slate-900">
      <h1 className="font-bold text-2xl mb-10">Adaugă o activitate</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setFieldValue }) =>
          handleSubmit(values, resetForm, setFieldValue)
        }
      >
        <Form className="flex flex-col space-y-4">
          <div className="flex mobile:flex-col">
            <div className="w-1/2 mr-6 mobile:w-full">
              <ActivityDate />
            </div>
            <div className="w-1/2 mobile:w-full mobile:mt-4">
              <ActivityDuration />
            </div>
          </div>
          {!userId && <SelectPerson/>}
          {!projectId && <SelectProject />}
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

          <div className="flex flex-col sm:flex-row justify-between mt-4">
            <Checkbox
              onChange={() => {
                setCheckbox(!checkbox);
              }}
              className="form-checkbox rounded"
            >
              <div className="w-40">Continuă să adaugi</div>
            </Checkbox>
            <div className="flex gap-4 tablet:mt-2 mobile:flex-col">
              <button
                className="px-5 py-2 bg-accent text-white rounded-md mobile:w-full"
                onClick={hideModal}
                type="reset"
              >
                Anulează
              </button>
              <Submit className="px-5 py-2 bg-primary text-white rounded-md mobile:w-full">Confirmă</Submit>
            </div>
          </div>
          {projectId && <InvisibleProjectID id={projectId} />}
        </Form>
      </Formik>
    </div>
  );
};

export default AddActivityForm;
