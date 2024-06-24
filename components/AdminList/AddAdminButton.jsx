import React from 'react';
import Link from '../Link';

const AddAdminButton = () => {
  return (
    <Link href="/admin/add-admin">
      <a className="add-button">
        <i className="fas fa-plus" />
        <span className="add-button-text"> Adauga administrator</span>
      </a>
    </Link>
  );
};

export default AddAdminButton;
