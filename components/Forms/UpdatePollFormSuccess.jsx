import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { updatePoll } from '../../api/polls';
import { toaster } from '../../lib';
import { editValidationSchema } from '../../models/add-poll';
import Button from '../Button';
import { Input, Select, Textarea } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import PollExpirePeriod from '../Fields/PollExpirePeriod';
import PollAnonymity from '../Fields/PollAnonymity';
import PollsForm from "./PollForm";

const UpdatePollFormSuccess = ({ data, role }) => {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const options = ['low', 'medium', 'high'];

  const handleSubmit = async ({ title, description, priority, daysUntilExpire }) => {
    try {
      await updatePoll(id, { title, description, priority, daysUntilExpire });
      toaster.success('Sondajul a fost editat');
      router.push(`/${role}/polls/${id}`);
    } catch (e) {
      toaster.error('Sondajul nu a putut fi editat!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const translatePriorityOptionToRomanian = (priorityOption) => {
    switch (priorityOption) {
      case 'low':
        return 'Scazuta';
      case 'medium':
        return 'Medie';
      case 'high':
        return 'Ridicata';
    }
  };

  return (
    <PollsForm
      initialValues={data}
      validationSchema={editValidationSchema}
      onSubmit={handleSubmit}
      isEdit={true}
      data={{ ...data, id, role }}
    />
  );
};

export default UpdatePollFormSuccess;
