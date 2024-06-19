import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { createPoll } from '../../api/polls';
import { useProfile } from '../../hooks';
import { toaster } from '../../lib';
import { initialValues, validationSchema } from '../../models/add-poll';
import { AddOptionField, PollDescription, PollQuestion, PollTitle } from '../Fields';
import PollExpirePeriod from '../Fields/PollExpirePeriod';
import SelectPriority from '../Fields/SelectPriority';
import { Submit } from '../Formik';
import PollAnonymity from '../Fields/PollAnonymity';

const AddPollForm = () => {
  const router = useRouter();
  const { me } = useProfile();

  const handleSubmit = async (values) => {
    try {
      await createPoll(values);
      toaster.success('Sondajul a fost adaugat');
      router.push(`/${me.role}/polls`);
    } catch (e) {
      toaster.error('Sondajul nu a putut fi adaugat');
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="w-fit">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="card max-w-md flex flex-col gap-4 h-fit">
            <PollTitle />
            <PollDescription />
            <PollQuestion />
            <SelectPriority />
            <PollExpirePeriod />
            <PollAnonymity />
            <Submit className=" hidden md:block w-full h-fit max-w-md text-base px-6">
              Adaugă
            </Submit>
          </div>
          <div className="max-w-md">
            <AddOptionField />
          </div>
        </div>

        <div className="w-full">
          <Submit className="block md:hidden w-full h-fit max-w-md text-base px-6">Adauga</Submit>
        </div>
      </Form>
    </Formik>
  );
};

export default AddPollForm;
