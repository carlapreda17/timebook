import { axiosAuth } from '../lib';

const deletePerson = async (id) => await axiosAuth.delete(`/identities/${id}`);

export { deletePerson };
