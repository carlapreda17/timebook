import { Formik, Form, Field } from 'formik';
import { updateActivity } from '../../api/activities';
import { useQuery } from '../../hooks';
import { toaster } from '../../lib';
import { validationSchema } from '../../models/addActivity';
import ActivityDate from '../Activities/ActivityDate';
import { ActivityDuration, Textarea } from '../Fields';
import SelectProject from '../Fields/SelectProject';
import { Fieldset, Submit } from '../Formik';
import UserActivityEditFormError from '../ProjectTable/UserActivityEditFormError';
import UserActivityEditFormLoading from '../ProjectTable/UserActivityEditFormLoading';

const EditDayActivityFormUser = ({ hideModal, id, refetch, setShowMenu }) => {
  const { data, status } = useQuery(`/activities/${id}`);
  const handleSubmit = async (values) => {
    try {
      await updateActivity(id, values);
      toaster.success('Activitatea a fost editata cu succes!');
      hideModal();
      refetch();
      setShowMenu('');
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
        <div className="w-full p-4 bg-white rounded-lg max-w-xl px-6 dark:bg-slate-900">
          <h1 className="font-bold text-2xl pb4 mb-4 border-b dark:text-white dark:border-b-slate-800">
            Editează o activitate
          </h1>
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
              <div className="sm:flex grid grid-cols-2 sm:justify-end items-end gap-3 font-medium">
                <button type="button" className="cancel" onClick={hideModal}>
                  Anulează
                </button>
                <Submit className="confirm w-full">Confirmă</Submit>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export default EditDayActivityFormUser;
