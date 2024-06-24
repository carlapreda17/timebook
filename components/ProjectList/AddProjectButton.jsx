import Link from '../Link';

const AddProjectButton = () => {
  return (
    <>
      <Link href="/admin/projects/add">
        <button className="add-button">
          <i className="fas fa-plus" />
          <span className="add-button-text">Adaugă proiect</span>
        </button>
      </Link>
    </>
  );
};

export default AddProjectButton;
