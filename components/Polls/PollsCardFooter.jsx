import { activatePoll, approvePoll, deactivatePoll, deletePoll, rejectPoll } from '../../api/polls';
import { useProfile } from '../../hooks';
import AreYouSureRomanian from '../AreYouSureRomanian';
import { ConfirmModal } from '../LogbookTable';
import Tooltip from '../Tooltip';
import PollsCardCreatedAt from './PollsCardCreatedAt';
import PollsContextMenu from './PollsContextMenu';

const PollsCardFooter = ({
  modal,
  hideModal,
  setModal,
  showContextMenu,
  setShowContextMenu,
  handleActions,
  createdAt,
  createdBy,
  role,
  id,
  status,
  active,
  hasParticipated,
  isAnonymous,
}) => {
  const { me } = useProfile();

  return (
    <div className="flex justify-between align-middle ">
      <div className="flex justify-between">
        <Tooltip
          icon={`fa-${hasParticipated ? 'solid' : 'regular'} fa-circle text-2xl ${
            status === 'approved'
              ? 'text-secondary'
              : status === 'pending'
              ? 'text-yellow-500'
              : status === 'rejected'
              ? 'text-accent'
              : ''
          }`}
        >
          {hasParticipated ? 'Completat' : 'Necompletat'},
          {status === 'approved'
            ? 'Aprobat'
            : status === 'rejected'
            ? 'Respins'
            : role === 'admin'
            ? 'In asteptare'
            : 'Propus'}
        </Tooltip>
        {isAnonymous && (
          <Tooltip icon="fa-solid fa-user-secret text-2xl text-primary dark:text-sky-500">
            Anonim
          </Tooltip>
        )}
        {/* <PollStatusLabel
          status={active ? 'Activ' : 'Inactiv'}
          color={active ? 'secondary' : 'accent'}
        ></PollStatusLabel> */}
      </div>
      <div className="flex justify-end align-middle ">
        <PollsCardCreatedAt createdAt={createdAt} />
        {(role === 'admin' || (role === 'user' && me.me === createdBy._id)) && (
          <div
            onClick={() => setShowContextMenu(true)}
            className="flex cursor-pointer px-4 relative dark:text-slate-300"
            role="button"
          >
            <i className="fa-solid fa-ellipsis-vertical text-xl" />
            {showContextMenu && (
              <PollsContextMenu
                id={id}
                status={status}
                active={active}
                setShowMenu={setShowContextMenu}
                role={role}
                createdBy={createdBy}
                setDeleteModalIsVisible={() => setModal('deleteModal')}
                setApproveModalIsVisible={() => setModal('approveModal')}
                setRejectModalIsVisible={() => setModal('rejectModal')}
                setActivateModalIsVisible={() => setModal('activateModal')}
                setDeactivateModalIsVisible={() => setModal('deactivateModal')}
              />
            )}
            <AreYouSureRomanian
              isOpen={modal === 'deleteModal'}
              hide={hideModal}
              iAmSure={() =>
                handleActions(
                  deletePoll,
                  'Sondajul a fost sters cu succes!',
                  'Sondajul nu a putut fi sters.'
                )
              }
            >
              Esti sigur ca doresti sa stergi acest sondaj?
            </AreYouSureRomanian>
            <ConfirmModal
              isOpen={modal === 'approveModal'}
              hide={hideModal}
              iAmSure={() =>
                handleActions(
                  approvePoll,
                  'Sondajul a fost aprobat cu succes!',
                  'Sondajul nu a putut fi aprobat.'
                )
              }
              green={true}
            >
              Esti sigur ca aprobi acest sondaj?
            </ConfirmModal>
            <ConfirmModal
              isOpen={modal === 'rejectModal'}
              hide={hideModal}
              iAmSure={() =>
                handleActions(
                  rejectPoll,
                  'Sondajul a fost respins cu succes!',
                  'Sondajul nu a putut fi respins.'
                )
              }
            >
              Esti sigur ca doresti sa respingi acest sondaj?
            </ConfirmModal>
            <ConfirmModal
              isOpen={modal === 'activateModal'}
              hide={hideModal}
              iAmSure={() =>
                handleActions(
                  activatePoll,
                  'Sondajul a fost activat cu succes!',
                  'Sondajul nu a putut fi activat.'
                )
              }
              green={true}
            >
              Esti sigur ca doresti sa activezi acest sondaj?
            </ConfirmModal>
            <ConfirmModal
              isOpen={modal === 'deactivateModal'}
              hide={hideModal}
              iAmSure={() =>
                handleActions(
                  deactivatePoll,
                  'Sondajul a fost dezactivat cu succes!',
                  'Sondajul nu a putut fi dezactivat.'
                )
              }
            >
              Esti sigur ca doresti sa dezactivezi acest sondaj?
            </ConfirmModal>
          </div>
        )}
      </div>
    </div>
  );
};

export default PollsCardFooter;
