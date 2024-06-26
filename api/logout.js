import { axios, router, toaster } from '../lib';
import { store } from '../auth';

const logout = async () => {
  try {
    await axios.post('logout');
    store.dispatch({ type: 'REMOVE' });

    // notify user and other actions
    toaster.success('Logout successful');

    // hide vacations menu subitems
    window.localStorage.setItem('showVacationsSubitems', false);

    // redirect home
    router.push('/login');
  } catch (err) {
    toaster.error(err.message);
  }
};

export default logout;
