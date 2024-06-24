import Link from 'next/link';

const AddVacationButton = () => {
  return (
    <Link href="/admin/vacation-requests/add">
      <button
        className="add-button"
        type="button"
      >
        <i className="fas fa-plus" />
        <span className="add-button-text">Adaugă concediu</span>
      </button>
    </Link>
  );
};

export default AddVacationButton;
