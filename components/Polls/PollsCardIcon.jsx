import Tooltip from '../Tooltip';
const PollsCardIcon = ({ priority }) => {
  let iconClass;
  let priorityRomanian;

  switch (priority) {
    case 'low':
      iconClass = 'fa-chevron-down color text-secondary';
      priorityRomanian = 'scazuta';
      break;
    case 'medium':
      iconClass = 'fa-grip-lines text-primary';
      priorityRomanian = 'medie';
      break;
    case 'high':
      iconClass = 'fa-chevron-up text-accent';
      priorityRomanian = 'ridicata';
      break;
    default:
      iconClass = 'fa-grip-lines text-primary';
      priorityRomanian = 'medie';
      break;
  }

  return (
    <div className="flex justify-center items-start text-2xl pb-1">
      <Tooltip icon={`fa-solid ${iconClass}`}>Prioritate {priorityRomanian}</Tooltip>
    </div>
  );
};

export default PollsCardIcon;
