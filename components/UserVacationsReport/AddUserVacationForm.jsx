import { Formik, Form, Field } from 'formik';
import { Number, SelectPerson, Textarea } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { initialValues, validationSchema } from '../../models/addVacationDays';
import InvisibleUserID from '../Activities/InvisibleUserID';
import { TypeInput } from '.';
import { createVacation } from '../../api/vacations';
import { toaster } from '../../lib';

const AddUserVacationForm = ({ id, hideModal, refetch }) => {
  const handleSubmit = async (values) => {
    try {
      await createVacation(values);
      toaster.success('Zilele au fost adaugate cu succes!');
      if (typeof hideModal === 'function') {
        hideModal();
      }
      refetch();
    } catch (e) {
      toaster.error('Zilele nu au putut fi adaugate!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };
  return (
    <div className="w-full p-4 bg-white rounded-lg max-w-xl px-6 border dark:bg-slate-900 dark:border-slate-800">
      <h1 className="font-bold text-2xl mb-4 pb-4 border-b dark:text-white dark:border-b-slate-800">
        Adaugă zile de concediu
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="flex flex-col space-y-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="col-span-2">
              <SelectPerson disabled />
            </div>
            <Fieldset name="amount" label="Numărul de zile">
              <Field id="amount" name="amount" as={Number} autoComplete="off" />
            </Fieldset>
          </div>
          <TypeInput />
          <Fieldset name="description" label="Descriere">
            <Field id="description" name="description" as={Textarea} rows={2} autoComplete="off" />
          </Fieldset>
          <div className="flex items-end justify-end gap-4">
            <button className="cancel" onClick={hideModal} type="button">
              Anulează
            </button>
            <Submit className="confirm">Confirmă</Submit>
          </div>
          <InvisibleUserID id={id} />
        </Form>
      </Formik>
    </div>
  );
};

export default AddUserVacationForm;
