import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Modal } from 'react-bootstrap';
import { format as dateFormat } from 'date-fns';
import { Input } from '.';
import { useDisclosure } from '../../hooks';
import { isValidDate } from '../../functions';
import dateLocaleRo from '../../functions/dateLocaleRo';

const Datepicker = ({ value: initialValue, onChange, ...props }) => {
  const [value, setValue] = useState(initialValue);
  const { isOpen, show, hide } = useDisclosure();

  const onClickDay = (value) => {
    setValue(dateFormat(value, 'yyyy-MM-dd'));
    hide();
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(value);
    }
  }, [value]);

  const calendarProps = {};
  if (isValidDate(new Date(initialValue))) {
    calendarProps.defaultValue = new Date(initialValue);
  }

  return (
    <div className="relative">
      <Input {...props} value={dateLocaleRo(value)} onChange={handleChange} onClick={show} />
      <div
        className="absolute h-full top-0 right-0 p-2.5 outline-none grid place-items-center cursor-pointer"
        onClick={show}
      >
        <i className="far fa-calendar-alt dark:text-slate-400" />
      </div>

      {isOpen && (
        <Modal className="datepicker" centered show={true} onHide={hide}>
          <Calendar onClickDay={onClickDay} {...calendarProps} />
        </Modal>
      )}
    </div>
  );
};

export default Datepicker;
