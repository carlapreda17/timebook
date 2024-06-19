import { Formik, Form, Field } from 'formik';
import { Number, Textarea } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { VacationDateRange } from '.';
import { initialValues, validationSchema } from '../../models/requestVacation';
import InvisibleUserID from '../Activities/InvisibleUserID';
import { createVacation } from '../../api/vacations';
import { toaster } from '../../lib';
import { useRouter } from 'next/router';

const RequestVacationForm = ({ id }) => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      await createVacation(values);
      toaster.success('Cererea a fost trimisa cu succes!');
      router.push('/user/vacation-requests');
    } catch (e) {
      toaster.error('Cererea nu a putut fi trimisa!');
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
        <VacationDateRange />
        <Fieldset name="amount" label="Durata în zile">
          <Field id="amount" name="amount" as={Number} step={0.5} className="input" />
        </Fieldset>
        <Fieldset name="description" label="Mesaj">
          <Field
            id="description"
            name="description"
            as={Textarea}
            rows={2}
            className="textarea"
            autoComplete="off"
          />
        </Fieldset>
        <Submit className="px-5 py-2 bg-primary text-white rounded-md w-full">Confirma</Submit>
        <InvisibleUserID id={id} />
      </Form>
    </Formik>
  );
};

export default RequestVacationForm;
