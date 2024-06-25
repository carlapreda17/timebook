import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import {classnames, toaster} from '../../lib';
import {AddOptionField, Input, PollDescription, PollQuestion, PollTitle} from '../Fields';
import PollExpirePeriod from '../Fields/PollExpirePeriod';
import SelectPriority from '../Fields/SelectPriority';
import PollAnonymity from '../Fields/PollAnonymity';
import {Fieldset, Submit} from '../Formik';
import Button from "../Button";

const PollsForm = ({ initialValues, validationSchema, onSubmit, isEdit = false, data }) => {
  const router = useRouter();
  const translatePriorityOptionToRomanian = (priorityOption) => {
    switch (priorityOption) {
      case 'low':
        return 'Scazuta';
      case 'medium':
        return 'Medie';
      case 'high':
        return 'Ridicata';
      default:
        return '';
    }
  };

  const options = ['low', 'medium', 'high'];

  // Extract the options
  const optionsData = data?.options?.map(option => option.answer) || [];

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form className="w-fit">
        <div className="flex flex-col tablet:items-center gap-2 md:flex-row">
          <div className="card tablet:w-full max-w-md flex flex-col gap-4 h-fit">
            <PollTitle />
            <PollDescription />
            <PollQuestion disabled={isEdit} />
            <SelectPriority />
            <PollExpirePeriod />
            <PollAnonymity disabled={isEdit} checked={data?.isAnonymous} />
            <Submit className="hidden md:block w-full h-fit max-w-md text-base px-6">
              {isEdit ? 'Actualizează' : 'Adaugă'}
            </Submit>
           </div>
          {isEdit ? (
            <div className="card max-w-md tablet:w-full h-fit">
              <div className="flex relative">
                <button className="rounded absolute right-0 dark:text-slate-300" disabled>
                  <i className="fas fa-plus" />
                  <span className="ml-2">Adaugă optiune</span>
                </button>
              </div>
              <Fieldset name="answers" label="Opțiuni">
                <div className="flex flex-col gap-5 mt-5">
                  {data.options.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <Field
                        value={item.answer}
                        name={`answers[${index}]`}
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
          ) : (
            <AddOptionField />
          )}
        </div>
        <div className="w-full">
          <Submit className="block mt-4 md:hidden w-full h-fit max-w-md text-base px-6">
            {isEdit ? 'Actualizează' : 'Adaugă'}
          </Submit>
        </div>
      </Form>
    </Formik>
  );
};

export default PollsForm;
