const { axiosAuth } = require('../lib');

const createPoll = async (data) => axiosAuth.post('/polls', data);

const updatePoll = async (id, data) => axiosAuth.put(`/polls/${id}`, data);

const votePoll = async (id, data) => axiosAuth.put(`/polls/${id}/vote`, data);

const deletePoll = async (id) => await axiosAuth.delete(`/admin/polls/${id}`);

const approvePoll = async (id) => await axiosAuth.put(`/admin/polls/${id}/approve`);

const rejectPoll = async (id) => await axiosAuth.put(`/admin/polls/${id}/reject`);

const activatePoll = async (id) => await axiosAuth.put(`/admin/polls/${id}/activate`);

const deactivatePoll = async (id) => await axiosAuth.put(`/admin/polls/${id}/deactivate`);

export {
  createPoll,
  updatePoll,
  votePoll,
  deletePoll,
  approvePoll,
  rejectPoll,
  activatePoll,
  deactivatePoll,
};
