import React from 'react';
import Link from '../Link';

const AddAdminButton = () => {
  return (
    <Link href="/admin/add-admin">
      <a className="border-white border-solid border-1 text-white hover:text-primary hover:bg-white transition ease-in-out duration-150 py-2 rounded px-4">
        <i className="fas fa-plus" />
        <span className="sm:inline"> Adauga administrator</span>
      </a>
    </Link>
  );
};

export default AddAdminButton;
