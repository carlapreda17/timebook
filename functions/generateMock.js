const generateMock = (number) => {
  const mockData = [];
  for (let i = 0; i < number; i++) {
    mockData.push(i);
  }
  return mockData;
};

export default generateMock;
