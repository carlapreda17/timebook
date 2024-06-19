import { Field } from 'formik';
import { Fieldset } from '../Formik';
import Number from './Number';

const PollExpirePeriod = ({ disabled = false }) => {
  return (
    <Fieldset name="daysUntilExpire" label="Perioada de expirare a sondajului (1-31 zile)">
      <Field
        id="daysUntilExpire"
        name="daysUntilExpire"
        as={Number}
        autoComplete="off"
        disabled={disabled}
      />
    </Fieldset>
  );
};

export default PollExpirePeriod;
