import { OverlayTrigger, Tooltip as Popover } from 'react-bootstrap';

const PollVotersTooltip = ({ content = '', placement = 'top', children }) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Popover className="tooltip">{children}</Popover>}
    >
      <div>{content}</div>
    </OverlayTrigger>
  );
};

export default PollVotersTooltip;
