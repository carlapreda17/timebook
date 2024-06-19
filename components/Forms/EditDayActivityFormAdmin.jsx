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

const EditDayActivityFormAdmin = ({ hideModal, id, refetch, setShowMenu }) => {
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
      {status === 'loading' && <EditActivityFormLoading />}
      {status === 'error' && <EditActivityFormError />}
      {status === 'success' && (
        <div className="w-full p-4 bg-white rounded-lg max-w-xl px-6">
          <h1 className="font-bold text-2xl mb-10">Editează o activitate</h1>
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
              <div className="flex flex-col justify-end pt-8 sm:flex-row gap-4 sm:items-end mt-6">
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

export default EditDayActivityFormAdmin;
