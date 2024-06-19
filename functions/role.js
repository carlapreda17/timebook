const getRole = (user) => {
  if (user.role === 'user') return 'Persoana tehnica';
  if (user.role === 'admin') return 'Administrator';
};

export default getRole;
