import { useQuery } from '../../hooks';
import AddAdminButton from './AddAdminButton';
import AdminListError from './AdminListError';
import AdminListLoading from './AdminListLoading';
import AdminListSuccess from './AdminListSuccess';

const AdminList = () => {
  const { data, status } = useQuery(`/identities?role=admin`);

  return (
    <article className="py-4 w-full sm:px-10">
      <div
        className="flex tablet:grid items-center justify-between mobile:justify-center bg-primary py-7 text-white rounded-t-xl w-full overflow-x-auto relative sm:-mx-4 sm:mx-0 pr-4 pl-8">
        <h2 className="font-bold text-xl tablet:mb-3 mobile:text-lg">Lista administratori</h2>
        <AddAdminButton/>
      </div>
        {status === 'loading' && <AdminListLoading/>}
        {status === 'error' && <AdminListError/>}
        {status === 'success' && <AdminListSuccess data={data}/>}
    </article>
  );
};

export default AdminList;
