import Description from '../Description';
import { VacationRequestTooltip } from '.';

const VacationTransactionDescription = ({ data }) => {
  return (
    <div className="flex">
      <Description description={data.description} copyText={false} limit={85} />
      <VacationRequestTooltip vacationRequest={data.vacationRequest} />
    </div>
  );
};

export default VacationTransactionDescription;
