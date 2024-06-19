import { deleteActivity } from '../../api/activities';
import { toaster } from '../../lib';
import AreYouSureRomanian from '../AreYouSureRomanian';
import { dateLocaleRo, formatActivityDuration } from '../../functions';

const DeleteCalendarDayActivityModal = ({
  _id,
  modal,
  hideModal,
  refetch,
  selectedActivity,
  project,
  duration,
  description,
  user,
  date,
}) => {
  const handleDelete = async (id) => {
    try {
      await deleteActivity(id);
      toaster.success('Activitatea a fost stearsa cu succes!');
      refetch();
    } catch (e) {
      toaster.error('Activitatea nu a putut fi stearsa!');
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };
  return (
    <AreYouSureRomanian
      isOpen={modal === 'delete' && selectedActivity === _id}
      hide={hideModal}
      iAmSure={() => handleDelete(_id)}
    >
      Ești sigur că dorești să ștergi activitatea? <br />
      Persoana: {`${user.first_name} ${user.last_name}`} <br />
      Numele proiectului: {project.name} <br />
      Data: {dateLocaleRo(date)} <br />
      Durata: {formatActivityDuration(duration)} <br />
      Descriere: {description}
    </AreYouSureRomanian>
  );
};

export default DeleteCalendarDayActivityModal;
