import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { dateLocaleRo } from '../../functions';
import FormatDuration from '../FormatDuration';

const CalendarDayActivityTooltip = ({ children, activity, role }) => {
  const renderTooltip = (props) => (
    <Tooltip {...props} className="tooltip">
      <ul className="text-left">
        <li>Data: {dateLocaleRo(activity.date)}</li>
        <li className="flex gap-0.5">
          Durata: <FormatDuration duration={activity.duration} smallText />
        </li>
        <li>Proiect: {activity.project.name}</li>
        {role === 'admin' && (
          <li>Persoana: {activity.user.first_name + ' ' + activity.user.last_name}</li>
        )}
        <li className="line-clamp-2">Descriere: {activity.description}</li>
      </ul>
    </Tooltip>
  );
  return (
    <OverlayTrigger overlay={renderTooltip} placement="top" delay={{ show: 1000 }}>
      {children}
    </OverlayTrigger>
  );
};

export default CalendarDayActivityTooltip;
