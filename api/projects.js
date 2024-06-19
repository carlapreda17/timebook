const { axiosAuth } = require('../lib');

const createProject = async (data) => axiosAuth.post('/projects', data);

const deleteProject = async (id) => await axiosAuth.delete(`/projects/${id}`);

const updateProject = async (id, data) => axiosAuth.put(`/projects/${id}`, data);

const reactivateProject = async (id) => axiosAuth.put(`/projects/${id}`, { active: true });

export { deleteProject, createProject, updateProject, reactivateProject };
