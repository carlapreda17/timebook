import { useState } from 'react';
import { PersonAge } from './';
import Tooltip from '../Tooltip';
import Link from 'next/link';
import AreYouSureRomanian from '../AreYouSureRomanian';
import { deletePerson } from '../../api/techincal-people';
import { router, toaster } from '../../lib';
import { useMutation } from '../../hooks';
import ActivatePersonModal from '../Modals/ActivatePersonModal';
import { activatePerson } from '../../api/persons';

const PersonRowSuccess = ({
  last_name,
  first_name,
  email,
  job,
  birthday,
  _id,
  active,
  refetch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hideModal = () => setIsOpen(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const hideEdit = () => setEditIsOpen(false);
  const handleEdit = () => {
    router.push(`/admin/technical-people/${_id}`);
  };

  const mutation = useMutation(deletePerson, {
    invalidateQueries: [
      'identities',
      {
        role: 'user',
        active: true,
      },
    ],
    onSuccess: () => {
      toaster.success('Persoana a fost stearsa cu succes!');
      refetch();
    },
    onError: () => toaster.error('Persoana nu a putut fi stearsa!'),
    onSettled: () => hideModal(),
  });

  const handleDelete = () => {
    mutation.mutateAsync(_id);
  };

  const handleActivate = async (id) => {
    try {
      await activatePerson(id);
      toaster.success('Persoana a fost activata cu success!');
      refetch();
    } catch (e) {
      toaster.error('Persoana nu a putut fi activata!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };
  return (
    <>
      <tr className={active == true ? 'text-black' : 'bg-gray-200 text-gray-400'}>
        <Link href={`/admin/timesheets/people/${_id}`}>
          <td className="p-4 px-8 font-bold cursor-pointer hover:text-blue-500">
            {(last_name + ' ' + first_name).toUpperCase()}
          </td>
        </Link>
        <td className="p-4 w-80">{email}</td>
        <td className="p-4 w-24">
          <PersonAge birthday={birthday} />
        </td>
        <td className="p-4 w-72">{job}</td>
        <td className="p-4 w-28">
          <div className="flex justify-around">
            <button title="Editeaza" onClick={handleEdit}>
              <Tooltip icon="fa-solid fa-eye text-blue-500 text-lg">Editeaza</Tooltip>
            </button>
            {active ? (
              <button title="Șterge" onClick={() => setIsOpen(true)}>
                <Tooltip icon="fa-solid fa-trash text-red-700 text-lg">Șterge</Tooltip>
              </button>
            ) : (
              <button title="Activeaza" onClick={() => setEditIsOpen(true)}>
                <Tooltip icon="fa-solid fa-circle-up text-green-700 text-lg">Activeaza</Tooltip>
              </button>
            )}
          </div>
        </td>
      </tr>
      <AreYouSureRomanian isOpen={isOpen} hide={hideModal} iAmSure={() => handleDelete(_id)}>
        Esti sigur ca doresti sa stergi aceasta persoana?
      </AreYouSureRomanian>
      <ActivatePersonModal
        isOpen={editIsOpen}
        hide={hideEdit}
        iAmSure={() => handleActivate(_id)}
      />
    </>
  );
};

export default PersonRowSuccess;
