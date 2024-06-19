import React from 'react';
import DeleteProject from './DeleteProject';
import Link from './Link';
import { useRef } from 'react';
import { useOnClickOutside } from '../hooks';

const ProjectMenu = ({ id, hide, openModal }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    hide();
  });

  return (
    <>
      <ul className="flex flex-col py-2" ref={ref}>
        <li className="hover:bg-gray-100">
          <Link href={`/admin/timesheets/projects/${id}`}>
            <a className="px-4 py-2 text-gray-600 flex items-center no-underline">Vezi timesheet</a>
          </Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href={`/admin/projects/${id}`}>
            <a className="px-4 py-2 text-gray-600 flex items-center no-underline">Vezi detalii</a>
          </Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link href={`/admin/projects/${id}/edit`}>
            <a className="px-4 py-2 text-gray-600 flex items-center no-underline">
              Editeaza proiect
            </a>
          </Link>
        </li>
        <DeleteProject id={id} hide={hide} openModal={openModal} />
      </ul>
    </>
  );
};

export default ProjectMenu;
