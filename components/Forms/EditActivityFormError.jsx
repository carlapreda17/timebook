import React from 'react';
import { Datepicker, Number, Textarea } from '../Fields';

const EditActivityFormError = () => {
  return (
    <div className="w-full p-4 bg-white rounded-lg max-w-xl px-6">
      <h1 className="font-bold text-2xl mb-10">Editează o activitate</h1>
      <form>
        <div className="flex">
          <div className="w-1/2 mr-6">
            <label className="w-full">
              Data activitatii
              <Datepicker
                disabled
                className="mb-6 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-red-200"
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="w-full">
              Durata proiectului (in minute)
              <Number
                id="duration"
                name="duration"
                as={Number}
                className="mb-6 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-red-200"
                autoComplete="off"
                disabled
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label>
            Numele persoanei
            <select className="select" disabled></select>
          </label>
          <label>
            Numele proiectului
            <select
              className="mb-6 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-red-200"
              disabled
            ></select>
          </label>
        </div>
        <label className="w-full">
          Descrierea acitivitatii
          <Textarea
            id="description"
            name="description"
            as={Textarea}
            rows={3}
            className="mb-5 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full flex items-center pl-3 py-2 text-sm border-gray-300 rounded border bg-red-200"
            disabled
            autoComplete="off"
          />
        </label>
        <div className="flex pt-8 flex-row gap-4 justify-between mt-6">
          <button type="button" className="cancel" disabled>
            <span className="ml-2">Anulează</span>
          </button>
          <button className="confirm" disabled>
            <span className="ml-2">Confirma</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditActivityFormError;
