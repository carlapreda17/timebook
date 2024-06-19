const { axiosAuth } = require('../lib');

const createVacation = async (data) => axiosAuth.post('/vacations', data);

const rejectVacation = async (id) => axiosAuth.put(`vacations/${id}`, { status: 'rejected' });

const approveVacation = async (id) => axiosAuth.put(`vacations/${id}`, { status: 'approved' });

const deleteVacation = async (id) => axiosAuth.delete(`vacations/${id}`);

export { createVacation, rejectVacation, approveVacation, deleteVacation };
