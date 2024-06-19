import React from 'react';
import Button from '../Button';

const SeeResultPollButton = ({ detailsAreVisible, onClickSeeDetailsHandle }) => {
  return (
    <>
      <Button
        onClick={onClickSeeDetailsHandle}
        className="button square mini primary w-full sm:w-auto py-2 flex align-center justify-center"
      >
        <div className="flex gap-2  items-center">
          {detailsAreVisible ? (
            <>
              <i className="fa-solid fa-eye-slash"></i>
              <span> Ascunde rezultate</span>
            </>
          ) : (
            <>
              <i className="fa-solid fa-eye"></i>
              <span> Vezi rezultate</span>
            </>
          )}
        </div>
      </Button>
    </>
  );
};

export default SeeResultPollButton;
