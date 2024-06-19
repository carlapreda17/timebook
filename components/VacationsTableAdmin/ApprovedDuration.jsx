import Plural from '../Plural';

const ApprovedDuration = ({ duration }) => {
  return <>{duration > 0 && <Plural count={duration} one="zi" many="zile" />}</>;
};

export default ApprovedDuration;
