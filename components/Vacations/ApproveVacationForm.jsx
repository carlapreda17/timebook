import { useQuery } from '../../hooks';
import {
  ApproveVacationFormLoading,
  ApproveVacationFormError,
  ApproveVacationFormSuccess,
} from '.';

const ApproveVacationForm = ({ id, hideModal, refetch }) => {
  const { data, status } = useQuery(`vacation-request/${id}`);
  return (
    <div className="card">
      {status === 'loading' && <ApproveVacationFormLoading />}
      {status === 'error' && <ApproveVacationFormError />}
      {status === 'success' && (
        <ApproveVacationFormSuccess data={data} refetch={refetch} id={id} hideModal={hideModal} />
      )}
    </div>
  );
};

export default ApproveVacationForm;
