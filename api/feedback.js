const { axiosAuth } = require('../lib');

const addFeedback = async (data) => axiosAuth.post('feedback', data);

const solveFeedback = async (id) => axiosAuth.put(`/feedback/${id}`, { solved: true });

export { addFeedback, solveFeedback };
