const VacationType = ({ type }) => {
  return (
    <>
      {type === 'annual' && <span>Anual</span>}
      {type === 'extra-time' && <span>Extra time</span>}
      {type === 'bonus' && <span>Bonus</span>}
      {type === 'vacation' && <span>Concediu</span>}
    </>
  );
};

export default VacationType;
