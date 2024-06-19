import { MyProfileSuccess, MyProfileError, MyProfileLoading } from '.';
import { classnames } from '../../lib';
import getRole from '../../functions/role';
import ProfileActions from './ProfileActions';

const MyProfile = ({ data, status, show, forTechnicalPeople = false }) => {
  return (
    <div className="w-full">
      <img
        className={classnames(
          'sm:object-cover object-center rounded-t-xl w-full sm:h-32 h-64',
          data && getRole(data) !== 'Administrator' && 'sm:h-80'
        )}
        src="/images/subtle-prism.svg"
        alt="profile-cover"
      />
      <div
        className={classnames(
          'flex flex-col md:gap-8 w-full px-1 -mt-14 md:flex-row sm:px-10',
          data && getRole(data) !== 'Administrator' && '-mt-20'
        )}
      >
        <article className=" py-4">
          {status === 'loading' && <MyProfileLoading />}
          {status === 'error' && <MyProfileError />}
          {status === 'success' && <MyProfileSuccess data={data} />}
        </article>
        <ProfileActions
          id={data?._id}
          data={data}
          show={show}
          forTechnicalPeople={forTechnicalPeople}
        />
      </div>
    </div>
  );
};

export default MyProfile;
