const FeedbackType = ({ type }) => {
  return (
    <>
      {type === 'bug' && <i className="fa-solid fa-bug mr-2 text-accent" />}
      {type === 'improvement' && <i className="fa-solid fa-wrench mr-2 text-yellow-400" />}
      {type === 'other' && <i className="fa-solid fa-bookmark mr-2 text-primary" />}
    </>
  );
};

export default FeedbackType;
