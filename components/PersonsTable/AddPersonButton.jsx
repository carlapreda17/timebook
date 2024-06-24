import Link from '../Link';

const AddPersonButton = () => {
  return (
    <Link href="/admin/technical-people/add">
      <a className="add-button">
        <i className="fas fa-plus" />
        <span className="add-button-text">Adaugă persoană</span>
      </a>
    </Link>
  );
};

export default AddPersonButton;
