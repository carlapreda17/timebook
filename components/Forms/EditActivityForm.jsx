import ActivityDate from '../Activities/ActivityDate';
import { ActivityDuration, Textarea } from '../Fields';
import SelectProject from '../Fields/SelectProject';
import SelectPerson from '../Fields/SelectPerson';
import { Formik, Form, Field } from 'formik';
import { useQuery } from '../../hooks';
import { validationSchema } from '../../models/addActivity';
import { Fieldset, Submit } from '../Formik';
import { updateActivity } from '../../api/activities';
import { toaster } from '../../lib';
import EditActivityFormLoading from './EditActivityFormLoading';
import EditActivityFormError from './EditActivityFormError';

const EditActivityForm = ({ hideModal, id }) => {
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
      {status === 'loading' && <EditActivityFormLoading />}
      {status === 'error' && <EditActivityFormError />}
      {status === 'success' && (
        <div className="w-full  p-4 bg-white rounded-lg max-w-xl px-6 dark:bg-slate-900">
          <h1 className="font-bold text-2xl mb-4 pb-4 border-b dark:border-slate-700 dark:text-white">
            Editează o activitate
          </h1>
          <Formik
            initialValues={{ ...data, project: data.project._id, user: data.user._id }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
              <SelectPerson />
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
              <div className="flex flex-col justify-between pt-8 sm:flex-row gap-4 sm:justify-between mt-6">
                <button
                  type="button"
                  className="px-5 py-2 bg-accent text-white rounded-md mt-4"
                  onClick={hideModal}
                >
                  <i className="fa-solid fa-arrow-left" />
                  <span className="ml-2">Anulează</span>
                </button>
                <Submit className="button full primary mt-4 px-5 py-2 bg-primary text-white rounded-md">
                  <i className="fa-solid fa-check" />
                  <span className="ml-2">Confirmă</span>
                </Submit>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export default EditActivityForm;
