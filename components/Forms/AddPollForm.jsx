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
import PollsForm from "./PollForm";

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
    <PollsForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    />
  );
};

export default AddPollForm;
