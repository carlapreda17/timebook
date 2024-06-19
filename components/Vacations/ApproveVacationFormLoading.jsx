import { Datepicker, Textarea } from '../Fields';

const ApproveVacationFormLoading = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Aproba concediu</h2>
      <label>
        <span className="font-semibold">Numele persoanei</span>
        <select
          className="mb-5 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          disabled
        ></select>
      </label>
      <div className="flex gap-6">
        <label className="w-1/2">
          <span className="font-semibold">Data de inceput</span>
          <Datepicker
            disabled
            className="mb-5 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          />
        </label>
        <label className="w-1/2">
          <span className="font-semibold">Data de sfarsit</span>
          <Datepicker
            disabled
            className="mb-5 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          />
        </label>
      </div>
      <label className="w-full">
        <span className="font-semibold">Mesaj</span>
        <Textarea
          rows={2}
          className="mb-5 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full flex items-center pl-3 py-2 text-sm border-gray-300 rounded border"
          disabled
          autoComplete="off"
        />
      </label>
      <label className="w-full">
        <span className="font-semibold">Numar de zile aprobate</span>
        <input
          type="text"
          className="mb-5 mt-1 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full flex items-center pl-3 py-2 text-sm border-gray-300 rounded border"
          disabled
        />
      </label>
      <div className="flex flex-row gap-4 ml-auto">
        <button className="px-5 py-2 bg-accent text-white rounded-md mt-4" type="button" disabled>
          Anulează
        </button>
        <button className="px-5 py-2 bg-primary text-white rounded-md mt-4" disabled>
          Confirma
        </button>
      </div>
    </div>
  );
};

export default ApproveVacationFormLoading;
