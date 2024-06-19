import Link from 'next/link';

const LogbookButton = () => {
  return (
    <Link href="/admin/logbook">
      <a className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4 cursor-pointer">
        <i className="fa-regular fa-rectangle-list" />
        <span className="ml-2 inline">Logbook</span>
      </a>
    </Link>
  );
};

export default LogbookButton;
