import React from 'react';
import { Input } from '../Fields';
import Button from '../Button';

const UpdatePersonError = () => {
  return (
    <form className="flex flex-col space-y-4">
      <div className="flex">
        <div className="w-1/2 mr-6">
          <label>
            Nume
            <Input className="form-input bg-red-200 rounded w-full border-0 mb-5" disabled />
          </label>
        </div>
        <div className="w-1/2">
          <label>
            Prenume
            <Input className="form-input bg-red-200 rounded w-full border-0 mb-5" disabled />
          </label>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 mr-6">
          <label>
            Zi de nastere
            <Input className="form-input bg-red-200 rounded w-full border-0 mb-5" disabled />
          </label>
        </div>
        <div className="w-1/2">
          <label>
            Pozitie in cadrul companiei
            <Input className="form-input bg-red-200 rounded w-full border-0 mb-5" disabled />
          </label>
        </div>
      </div>
      <label>
        Email
        <Input className="form-input bg-red-200 rounded w-full border-0 mb-5" disabled />
      </label>
      <div className="flex flex-col justify-between pt-8 sm:flex-row gap-4 sm:justify-between mt-6">
        <button
          className="button full text-white primary border-none mt-4 px-6 bg-accent text-base"
          disabled
        >
          <i className="fas fa-arrow-left"></i>
          <span className="ml-2">Inapoi la persoana</span>
        </button>
        <div className="flex items-center">
          <Button className="button full primary mt-4 text-base px-6" disabled>
            <i className="fa-solid fa-check-double" />
            <span className="ml-2">Salveaza schimbari</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UpdatePersonError;
