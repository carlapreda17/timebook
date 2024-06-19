const PollTotalVoted = ({ totalVotes, ...props }) => {
  return (
    <div>
      <p {...props}>Total voturi: {totalVotes} </p>
    </div>
  );
};

export default PollTotalVoted;
