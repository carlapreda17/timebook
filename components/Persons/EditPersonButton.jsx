import Link from 'next/link';

const EditPersonButton = ({ id }) => {
  return (
    <Link href={`/admin/technical-people/${id}/edit`}>
      <a className="border-secondary bg-secondary border-solid border-1 text-lg text-white lg:py-12 py-2 rounded text-center whitespace-nowrap">
        <i className="fa-solid fa-pen-to-square" />
        <span className="ml-2">Editeaza</span>
      </a>
    </Link>
  );
};

export default EditPersonButton;
