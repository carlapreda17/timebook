import { Tooltip } from '..';
import { useQuery } from '../../hooks';
import { dateLocaleRo } from '../../functions';

const VacationRequestTooltip = ({ vacationRequest }) => {
  const { data, status } = useQuery(`vacation-request/${vacationRequest}`);

  return (
    <>
      {status === 'success' ? (
        <Tooltip icon="fa-solid fa-circle-question text-primary">
          <ul className="text-left">
            <li>Data de inceput: {dateLocaleRo(data.startDate)}</li>
            <li>Data de sfarsit: {dateLocaleRo(data.endDate)}</li>
            <li className="line-clamp-1">Descriere: {data.description}</li>
          </ul>
        </Tooltip>
      ) : null}
    </>
  );
};

export default VacationRequestTooltip;
