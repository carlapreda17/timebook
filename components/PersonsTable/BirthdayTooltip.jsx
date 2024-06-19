import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { dateLocaleRo } from '../../functions';

const BirthdayTooltip = ({ children, birthday }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip className="tooltip">{dateLocaleRo(birthday)}</Tooltip>}
    >
      <span>{children}</span>
    </OverlayTrigger>
  );
};

export default BirthdayTooltip;
