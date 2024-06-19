import { useState } from 'react';
import { checkAuth, withAuth } from '../../../../auth';
import { Layout, withRouter } from '../../../../components';
import { MyProfile } from '../../../../components/MyProfile';
import { PersonalPageModals } from '../../../../components/Persons';
import { deletePerson } from '../../../../api/techincal-people';
import { activatePerson } from '../../../../api/persons';
import { toaster } from '../../../../lib';
import { useRouter } from 'next/router';
import { useQuery } from '../../../../hooks';

const Page = ({ id }) => {
  const { data, status } = useQuery(`/identity/${id}`);
  const [modal, setModal] = useState('');
  const router = useRouter();
  const show = (modal) => {
    setModal(modal);
  };
  const hide = () => {
    setModal('');
  };

  const forTechnicalPeople = true;

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
    <main>
      <Layout title="Colaboratori" role="admin">
        {status === 'success' && (
          <>
            <MyProfile {...{ data, status, show, forTechnicalPeople }} />
            <PersonalPageModals
              modal={modal}
              hide={hide}
              id={id}
              handleActivate={handleActivate}
              handleDelete={handleDelete}
            />
          </>
        )}
      </Layout>
    </main>
  );
};

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(withRouter(Page));
