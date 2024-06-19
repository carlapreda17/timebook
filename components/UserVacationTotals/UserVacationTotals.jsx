import { useQuery } from '../../hooks';
import { toaster } from '../../lib';
import Plural from '../Plural';
import Tooltip from '../Tooltip';

const UserVacationTotals = ({ data, id }) => {
  const { data: userData } = useQuery(`Identity/${id}`);

  if (!data || !data.totals) {
    return null;
  }
  const { available, annual, extratime, bonus, vacation_approved } = data.totals;

  const handleCopy = (text) => {
    toaster.success('Textul a fost copiat cu succes!');
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="text-lg">
        <h5 className="font-bold mt-2">TOTAL zile CO disponibile:</h5>
        <div className="flex space-x-1 items-center">
          <Plural one="zi" many="zile" count={available} />
          <span
            onClick={() =>
              handleCopy(
                `Colaborator:${`${userData.first_name} ${userData.last_name}`}
Anul: ${new Date().getFullYear()}
------------------------
Zile CO disponibile anual: ${annual}
Zile extra-time aprobate: ${extratime}
Zile bonus oferite: ${bonus}
Zile CO utilizate: ${vacation_approved}
------------------------
Zile CO disponibile: ${available}`
              )
            }
          >
            <Tooltip icon="fa fa-circle-question ml-2 text-secondary text-2xl" placement="right">
              <div className="flex flex-col space-y-4">
                <p>Zile CO disponibile anual: {annual}</p>
                <p>Zile extra-time aprobate: {extratime}</p>
                <p>Zile bonus oferite: {bonus}</p>
                <p>Zile CO utilizate: {vacation_approved}</p>
              </div>
            </Tooltip>
          </span>
        </div>
      </div>
    </>
  );
};

export default UserVacationTotals;
