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
    <Formik validationSchema={editValidationSchema} initialValues={data} onSubmit={handleSubmit}>
      <Form className="flex gap-2">
        <div className="card max-w-md flex flex-col gap-4 h-fit">
          <Fieldset name="title" label="Titlul sondajului">
            <Field id="title" name="title" as={Input} autoFocus autoComplete="off" />
          </Fieldset>
          <Fieldset name="description" label="Descrierea sondajului">
            <Field id="description" name="description" as={Textarea} autoComplete="off" />
          </Fieldset>
          <Fieldset name="question" label="Întrebarea">
            <Field id="question" name="question" as={Textarea} autoComplete="off" disabled />
          </Fieldset>
          <Fieldset name="priority" label="Prioritatea sondajului">
            <Field id="priority" name="priority" as={Select}>
              <option value="" disabled>
                Selectează prioritatea
              </option>
              {options.map((option) => {
                return (
                  <option value={option} key={option}>
                    {translatePriorityOptionToRomanian(option)}
                  </option>
                );
              })}
            </Field>
          </Fieldset>
          <PollExpirePeriod />
          <PollAnonymity disabled={true} checked={data.isAnonymous} />
          <Submit className="w-full text-base px-6">Actualizează</Submit>
        </div>
        <div className="card max-w-md h-fit">
          <div className="flex relative">
            <Button className="rounded absolute right-0 dark:text-slate-300" disabled>
              <i className="fas fa-plus" />
              <span className="ml-2">Adaugă optiune</span>
            </Button>
          </div>
          <Fieldset name="answers" label="Optiuni">
            <div className="flex flex-col gap-5 mt-5">
              {data.options.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <Field
                    value={item.answer}
                    name="answers"
                    as={Input}
                    autoFocus
                    autoComplete="off"
                    type="text"
                    className="w-full"
                    disabled
                  />
                  <Button
                    type="button"
                    className="border-red border-solid border-1 text-red hover:text-primary transition ease-in-out duration-150 py-2 rounded px-4 bg-red-600"
                    disabled
                  >
                    <i className="fas fa-trash text-white" />
                  </Button>
                </div>
              ))}
            </div>
          </Fieldset>
        </div>
      </Form>
    </Formik>
  );
};

export default UpdatePollFormSuccess;
