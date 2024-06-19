import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { VacationDateRange, VacationDurationInput } from '.';
import { approveVacation, createVacation } from '../../api/vacations';
import { toaster } from '../../lib';
import { initialValues, validationSchema } from '../../models/requestVacation';
import { SelectPerson, Textarea } from '../Fields';
import { Fieldset, Submit } from '../Formik';

const AddVacationForm = () => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      const response = await createVacation(values);
      approveVacation(response.document._id, values);
      toaster.success('Concediul a fost adaugat cu succes!');
      router.push(`/admin/vacations/${response.document.user}`);
    } catch (e) {
      toaster.error('Concediul nu a putut fi adaugat!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form className="flex flex-col space-y-4">
        <SelectPerson />
        <VacationDurationInput />
        <VacationDateRange />
        <Fieldset name="description" label="Mesaj">
          <Field id="description" name="description" as={Textarea} rows={2} autoComplete="off" />
        </Fieldset>
        <Submit className="px-5 py-2 bg-primary text-white rounded-md w-full">Confirma</Submit>
      </Form>
    </Formik>
  );
};

export default AddVacationForm;
