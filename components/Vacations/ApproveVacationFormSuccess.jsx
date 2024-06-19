import { Formik, Form, Field } from 'formik';
import { Textarea, SelectPerson, Number } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { StartDateSelect, EndDateSelect } from '.';
import { validationSchema } from '../../models/approveVacation';
import { approveVacation } from '../../api/vacations';
import { toaster } from '../../lib';

const ApproveVacationFormSuccess = ({ data, refetch, id, hideModal }) => {
  const handleSubmit = async (values) => {
    try {
      await approveVacation(id, values);
      toaster.success('Concediul a fost aprobat cu succes!');
      hideModal();
      refetch();
    } catch (e) {
      toaster.error('Concediul nu a putut fi aprobat!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={{ ...data, user: data.user._id, approved_duration: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Aproba concediu</h2>
        <SelectPerson disabled />
        <div className="flex gap-6">
          <div className="w-1/2">
            <StartDateSelect disabled />
          </div>
          <div className="w-1/2">
            <EndDateSelect disabled />
          </div>
        </div>
        <Fieldset name="description" label="Mesaj">
          <Field
            id="description"
            name="description"
            as={Textarea}
            rows={2}
            autoComplete="off"
            disabled
          />
        </Fieldset>
        <Fieldset name="approved_duration" label="Numar de zile aprobate">
          <Field id="approved_duration" name="approved_duration" as={Number} step="0.5" />
        </Fieldset>
        <div className="flex flex-row gap-4 ml-auto">
          <button
            className="px-5 py-2 bg-accent text-white rounded-md mt-4"
            type="button"
            onClick={hideModal}
          >
            Anulează
          </button>
          <Submit className="px-5 py-2 bg-primary text-white rounded-md w-full">Confirma</Submit>
        </div>
      </Form>
    </Formik>
  );
};

export default ApproveVacationFormSuccess;
