const getTotalTimeWorked = (data, selectedRows) => {
  if (selectedRows.length === 0) {
    return 0;
  }
  const time = data
    .filter((item) => selectedRows.includes(item._id))
    .reduce((sum, item) => sum + item.duration, 0);

  return time;
};

export default getTotalTimeWorked;
