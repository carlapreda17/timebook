import { Formik, Form, Field } from 'formik';
import React from 'react';
import { updateActivity } from '../../api/activities';
import { useQuery } from '../../hooks';
import { toaster } from '../../lib';
import { validationSchema } from '../../models/addActivity';
import ActivityDate from '../Activities/ActivityDate';
import { ActivityDuration, Textarea } from '../Fields';
import SelectProject from '../Fields/SelectProject';
import { Fieldset, Submit } from '../Formik';
import UserActivityEditFormError from './UserActivityEditFormError';
import UserActivityEditFormLoading from './UserActivityEditFormLoading';

const UserActivityEditForm = ({ hideModal, id }) => {
  const { data, refetch, status } = useQuery(`/activities/${id}`);
  const handleSubmit = async (values) => {
    try {
      await updateActivity(id, values);
      toaster.success('Activitatea a fost editata cu succes!');
      hideModal();
      refetch();
    } catch (e) {
      toaster.error('Activitatea nu a putut fi editata!');
      // eslint-disable-next-line
      console.log(e);
    }
  };

  return (
    <>
      {status === 'loading' && <UserActivityEditFormLoading />}
      {status === 'error' && <UserActivityEditFormError />}
      {status === 'success' && (
        <div className="w-full p-4 bg-white rounded-lg max-w-xl px-6">
          <h1 className="font-bold text-2xl mb-10">Editează o activitate</h1>
          <Formik
            initialValues={{ ...data, project: data.project._id, user: data.user._id }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
              <SelectProject />
              <Fieldset name="description" label="Descrierea activității">
                <Field
                  id="description"
                  name="description"
                  as={Textarea}
                  rows={2}
                  autoComplete="off"
                />
              </Fieldset>
              <div className="flex items-end flex-col md:flex-row gap-4 md:ml-auto md:mx-0">
                <button type="button" className="cancel" onClick={hideModal}>
                  <span className="ml-2">Anulează</span>
                </button>
                <Submit className="confirm">
                  <span className="ml-2">Confirma</span>
                </Submit>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export default UserActivityEditForm;
