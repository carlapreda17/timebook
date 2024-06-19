import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { Field, Input } from '.';
import Button from '../Button';
import { Fieldset } from '../Formik';
import { classnames } from '../../lib';

const AddOptionField = () => {
  const { values, setFieldValue, errors, setErrors } = useFormikContext();
  const [isFirstOptionLoaded, setIsFirstOptionLoaded] = useState(false);

  const handleAddItem = () => {
    setFieldValue('options', [...values.options, '']);
    if (values.options.length < 1) setIsFirstOptionLoaded(true);
    else setIsFirstOptionLoaded(false);
  };

  const handleInputChange = (index, value) => {
    const updatedItems = [...values.options];
    updatedItems[index] = value;
    setFieldValue('options', updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...values.options];
    updatedItems.splice(index, 1);
    setFieldValue('options', updatedItems);
  };

  useEffect(() => {
    if (values.options.length === 0) {
      setFieldValue('options', ['']);
      setIsFirstOptionLoaded(true);
    }
  }, []);

  values.options.some((option) => option === '') &&
    setErrors({ ...errors, options: 'Toate campurile trebuie completate!' });

  return (
    <div className={classnames('card max-w-md h-fit')}>
      <div className="flex relative pb-4">
        <Button
          onClick={handleAddItem}
          className="text-black transition ease-in-out duration-150 rounded absolute right-0 hover:text-primary mt-4 dark:hover:text-sky-500 dark:text-slate-200"
        >
          <i className="fas fa-plus" />
          <span className="ml-2">Adaugă opțiune</span>
        </Button>
      </div>
      <Fieldset name="options" label="Opțiuni">
        <div className="flex flex-col gap-5 mt-5">
          {values.options.length !== 0 ? (
            values.options.map((item, index) => (
              <div key={index} className="flex gap-4">
                <Field
                  value={item}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  name="options"
                  as={Input}
                  autoFocus={index >= 1}
                  autoComplete="off"
                  type="text"
                  className="w-full"
                />
                <Button
                  type="button"
                  className={classnames(
                    'border-red border-solid border-1 text-red hover:text-primary transition ease-in-out duration-150 py-2 rounded px-4 bg-red-600 hover:bg-red-700',
                    isFirstOptionLoaded && 'invisible'
                  )}
                  onClick={() => handleDeleteItem(index)}
                >
                  <i className="fas fa-trash text-white" />
                </Button>
              </div>
            ))
          ) : (
            // dummy option that is invisible when there are no options to keep the width of the option card
            // this is because of how width differs between browsers
            <div className="flex gap-4 invisible w-full -mt-10">
              <Field as={Input} type="text" className="w-full" />
              <Button type="button" className={'border-1 px-4'}>
                <i className="fas fa-trash" />
              </Button>
            </div>
          )}
        </div>
      </Fieldset>
    </div>
  );
};

export default AddOptionField;
