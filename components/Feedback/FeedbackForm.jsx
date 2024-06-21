import { Form, Formik } from 'formik';
import { useState } from 'react';
import { FeedbackDescription, TitleInput, TypeSelect } from '.';
import { useProfile } from '../../hooks';
import { initialValues, validationSchema } from '../../models/feedback';
import { Checkbox } from '../Fields';
import { Submit } from '../Formik';
import InvisibleUserID from '../Activities/InvisibleUserID';
import { addFeedback } from '../../api/feedback';
import { toaster } from '../../lib';

const FeedbackForm = ({ hideModal }) => {
  const { me } = useProfile();
  const [checkbox, setCheckbox] = useState(false);
  const handleSubmit = async (values, resetForm) => {
    try {
      let user = me.me;
      values.user = user;
      await addFeedback(values);
      toaster.success('Feedbackul a fost trimis!');
      if (checkbox) {
        resetForm();
      } else if (typeof hideModal === 'function') {
        hideModal();
      }
    } catch (e) {
      toaster.error('Feedbackul nu a putut fi trimis!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
    return;
  };

  return (
    <div className="w-full bg-white rounded-lg max-w-xl p-6 dark:bg-slate-900">
      <h1 className="font-bold text-2xl pb-4 mb-4 border-b dark:border-b-slate-700 dark:text-white">
        Feedback
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        <Form className="flex flex-col space-y-4">
          <TypeSelect />
          <TitleInput />
          <FeedbackDescription />
          <div className="flex justify-between m-tablet:flex-col">
           <div className="m-tablet:mb-3">
             <Checkbox
               onChange={() => {
                 setCheckbox(!checkbox);
               }}
               className="form-checkbox rounded mt-6"
             >
               <div className="w-40 mt-6 dark:text-white">Continuă să adaugi</div>
             </Checkbox>
           </div>
            <div className="flex sm:items-end flex-row gap-3 font-medium">
              <button className="cancel" onClick={hideModal} type="button">
                Anulează
              </button>
              <Submit className="confirm">Confirmă</Submit>
            </div>
          </div>
          <InvisibleUserID id={me.me} />
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackForm;
