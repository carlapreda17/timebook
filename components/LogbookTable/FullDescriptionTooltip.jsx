import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const FullDescriptionTooltip = ({ description, children }) => {
  const renderTooltip = (props) => <Tooltip {...props}>{description}</Tooltip>;
  return (
    <>
      {description.trim() && (
        <OverlayTrigger overlay={renderTooltip} placement="left">
          {children}
        </OverlayTrigger>
      )}
    </>
  );
};

export default FullDescriptionTooltip;
