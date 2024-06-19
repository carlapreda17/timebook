const { axiosAuth } = require('../lib');

const createPerson = async (data) => axiosAuth.post('/identities', data);

const createAdmin = async (data) => axiosAuth.post('/identities', data);

const deletePerson = async (id) => await axiosAuth.delete(`/identities/${id}`);

const updatePerson = async (id, data) => axiosAuth.put(`/identities/${id}`, data);

const changePassword = async (id, data) => {
  await axiosAuth.put(`/identity/${id}/change-password`, data);
};

const activatePerson = async (id) => axiosAuth.put(`/identities/${id}`, { active: true });

export { deletePerson, createPerson, updatePerson, changePassword, activatePerson, createAdmin };
