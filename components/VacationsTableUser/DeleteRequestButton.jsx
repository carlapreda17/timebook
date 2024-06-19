import { useState } from 'react';
import { VacationsTableUserModals } from '.';

const DeleteRequestButton = ({ id, refetch }) => {
  const [modal, setModal] = useState('');
  const hide = () => {
    setModal('');
  };
  return (
    <>
      <i
        className="fa-solid fa-trash text-2xl text-accent cursor-pointer"
        onClick={() => setModal('delete')}
      />
      <VacationsTableUserModals modal={modal} hide={hide} id={id} refetch={refetch} />
    </>
  );
};

export default DeleteRequestButton;
