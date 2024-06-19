import { useRouter } from 'next/router';
import { useState } from 'react';
import { activatePerson } from '../../api/persons';
import { deletePerson } from '../../api/techincal-people';
import { toaster } from '../../lib';
import { useQuery } from '../../hooks';
import {
  EditPersonButton,
  PersonalDetails,
  PersonalDetailsError,
  PersonalDetailsLoading,
  PersonalPageHeader,
  PersonalPageModals,
  PersonProfilePageButtons,
} from '.';

const PersonalPage = ({ id }) => {
  const { data, status } = useQuery(`/identity/${id}`);
  const router = useRouter();
  const [modal, setModal] = useState('');
  const show = (modal) => {
    setModal(modal);
  };
  const hide = () => {
    setModal('');
  };
  const handleDelete = async (id) => {
    try {
      await deletePerson(id);
      toaster.success('Persoana a fost stearsa cu succes!');
      router.back();
    } catch (err) {
      toaster.error('Persoana nu a putut fi stearsa!');
    }
  };
  const handleActivate = async (id) => {
    try {
      await activatePerson(id);
      toaster.success('Persoana a fost activata cu succes!');
      router.back();
    } catch (err) {
      toaster.error('Persoana nu a putut fi activata!');
    }
  };

  return (
    <>
      <div className="px-0 max-w-2xl">
        <div className="flex flex-col">
          <PersonalPageHeader data={data} status={status} />
          {status === 'success' && <EditPersonButton id={id} />}
        </div>
        {status === 'loading' && <PersonalDetailsLoading />}
        {status === 'error' && <PersonalDetailsError />}
        {status === 'success' && (
          <>
            <PersonalDetails person={data} />
            <PersonProfilePageButtons data={data} show={show} />
          </>
        )}
      </div>
      <PersonalPageModals
        modal={modal}
        hide={hide}
        id={id}
        handleActivate={handleActivate}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default PersonalPage;
