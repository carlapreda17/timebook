const { axiosAuth } = require('../lib');

const createActivity = async (data) => axiosAuth.post('/activities', data);

const deleteActivity = async (id) => await axiosAuth.delete(`activities/${id}`);

const updateActivity = async (id, data) => axiosAuth.put(`activities/${id}`, data);

// @see https://stackoverflow.com/questions/21863326/delete-multiple-records-using-rest
const deleteMany = async (data) => axiosAuth.post('admin/activities/delete', data);

const moveToPerson = async (data) => axiosAuth.put('admin/activities/move', data);

const moveToProject = async (data) => axiosAuth.put('admin/activities/move', data);

const exportActivities = async (data) => {
  await axiosAuth.download('/admin/activities/export', data);
};

export {
  deleteActivity,
  createActivity,
  updateActivity,
  deleteMany,
  moveToPerson,
  moveToProject,
  exportActivities,
};
