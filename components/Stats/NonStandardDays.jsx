import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../Button';

const NonStandardDays = ({ hide, isOpen, nonStandardDays, firstName, lastName }) => {
  const nonStandardDaysArray = [];
  for (const [key, value] of Object.entries(nonStandardDays)) {
    value.forEach((nonStandardDay) => {
      nonStandardDaysArray.push({ ...nonStandardDay, type: key });
    });
  }

  return (
    <>
      <Modal centered show={isOpen} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>
            {firstName} {lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="font-semibold">
            Zilele
            <span className="text-accent"> incomplete</span> /
            <span className="text-secondary"> extra program</span>
          </h3>
          <ul>
            {nonStandardDaysArray
              .sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
              })
              .map((nonStandardDay) => (
                <li key={nonStandardDay.date}>
                  {nonStandardDay.date} -{' '}
                  <span
                    className={`font-semibold 
                    ${nonStandardDay.type === 'extraTimeDays' ? 'text-secondary' : 'text-accent'}`}
                  >
                    {nonStandardDay.hoursWorked} ore
                  </span>
                </li>
              ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="text-accent border-accent border-solid border-1 hover:text-white hover:bg-accent transition ease-in-out duration-150 p-1.5 rounded px-3 text-center"
            onClick={hide}
          >
            <span className="">Inchide</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NonStandardDays;
