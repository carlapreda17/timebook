import Link from '../Link';

const AddPersonButton = () => {
  return (
    <Link href="/admin/technical-people/add">
      <a className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4">
        <i className="fas fa-plus" />
        <span className="ml-2">Adauga persoana</span>
      </a>
    </Link>
  );
};

export default AddPersonButton;
