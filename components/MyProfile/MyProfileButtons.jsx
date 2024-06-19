import ChangePassword from './ProfileActions';
import LogoutButton from '../LogoutButton';

const MyProfileButtons = ({ id }) => {
  return (
    <div className="flex justify-end gap-4 mt-3.5">
      <ChangePassword
        id={id}
        buttonClasses="border-primary border-primary bg-primary border-2 text-white  transition ease-in-out duration-150 p-1.5 rounded px-3  cursor-pointer text-center w-40"
        icon="fa-sharp fa-solid fa-key mr-2"
      />
      <LogoutButton
        icon="fa-sharp fa-solid fa-arrow-right-from-bracket mr-2"
        buttonClasses="py-2 px-3 w-40"
      />
    </div>
  );
};

export default MyProfileButtons;
