const PollStatusLabel = ({ status, color = 'secondary' }) => {
  return (
    <span
      className={`h-min ml-2 pb-2 pt-1.5 px-3 bg-${color} text-white  tracking-wide rounded-2xl`}
    >
      {status}
    </span>
  );
};

export default PollStatusLabel;
