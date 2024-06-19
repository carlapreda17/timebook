import { RadioContext, Radio } from '.';
import { ErrorMessage, useFormikContext } from 'formik';

const PollRadioFields = ({ poll, pollData, setPollData }) => {
  const { setFieldValue } = useFormikContext();
  const handleChange = (e) => {
    setFieldValue('answer', e.target.value);
  };

  return (
    <RadioContext.Provider
      value={{
        name: 'answer',
        selectedValue: pollData,
        onChange: (e) => {
          handleChange(e);
          setPollData({ answer: e.target.value });
        },
      }}
    >
      <div className="flex flex-col space-y-4 font-semibold">
        {poll.options.map((option) => (
          <Radio key={option._id} name="answer" value={option._id}>
            {option.answer}
          </Radio>
        ))}
        <ErrorMessage component="div" name="answer" className="text-accent bord" />
      </div>
    </RadioContext.Provider>
  );
};

export default PollRadioFields;
