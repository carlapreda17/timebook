import { useQuery } from '../../hooks';
import AddAdminButton from './AddAdminButton';
import AdminListError from './AdminListError';
import AdminListLoading from './AdminListLoading';
import AdminListSuccess from './AdminListSuccess';

const AdminList = () => {
  const { data, status } = useQuery(`/identities?role=admin`);

  return (
    <article className="py-4 w-full sm:px-10 ">
      <div className="flex items-center justify-between bg-primary py-7 text-white rounded-t-xl w-screen sm:w-full overflow-x-auto relative -mx-4 sm:mx-0 pr-4 pl-8">
        <h2 className="font-bold text-xl">Lista administratori</h2>
        <AddAdminButton />
      </div>
      {status === 'loading' && <AdminListLoading />}
      {status === 'error' && <AdminListError />}
      {status === 'success' && <AdminListSuccess data={data} />}
    </article>
  );
};

export default AdminList;
