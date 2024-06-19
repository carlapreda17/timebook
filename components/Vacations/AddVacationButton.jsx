import Link from 'next/link';

const AddVacationButton = () => {
  return (
    <Link href="/admin/vacation-requests/add">
      <button
        className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4"
        type="button"
      >
        <i className="fas fa-plus" />
        <span className="ml-2  inline">Adauga concediu</span>
      </button>
    </Link>
  );
};

export default AddVacationButton;
