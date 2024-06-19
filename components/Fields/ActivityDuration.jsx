import { Field, useFormikContext } from 'formik';
import { useState } from 'react';
import parseDuration from '../../functions/parseDuration';
import { Fieldset } from '../Formik';
import { ActivityDurationModal } from '.';
import Input from './Input';
import FormatDuration from '../FormatDuration';

const ActivityDuration = () => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const hideModal = () => {
    setModalIsOpen(false);
  };
  const handleChange = (e) => {
    setFieldValue('durationString', e.target.value);
    const parsed = parseDuration(e.target.value.toString());
    setFieldValue('duration', parsed);
    if (parsed === 0) {
      return setShowError(true);
    }
    return setShowError(false);
  };

  return (
    <>
      <div className="relative flex flex-col">
        <Fieldset name="durationString" label="Durata activității">
          <Field
            id="durationString"
            name="durationString"
            defaultValue={values.duration}
            value={values.durationString}
            as={Input}
            className="input"
            autoComplete="off"
            onChange={handleChange}
          />
        </Fieldset>
        <div
          className="absolute h-full top-0 right-0 p-2.5 outline-none grid place-items-center cursor-pointer mt-3.5 text-primary dark:text-slate-200"
          onClick={() => setModalIsOpen(true)}
        >
          <i className="fa-solid fa-circle-info" />
        </div>
      </div>
      {showError ? (
        <span className="text-red-500 text-sm">Format invalid!</span>
      ) : errors.duration && touched.duration ? (
        <span className="text-red-500 text-sm">Durată invalida!</span>
      ) : (
        <span className="text-gray-400">
          <FormatDuration duration={values.duration} />
        </span>
      )}

      <ActivityDurationModal show={modalIsOpen} hide={hideModal} />
    </>
  );
};

export default ActivityDuration;
