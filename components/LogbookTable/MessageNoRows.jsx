const MessageNoRows = ({ message }) => {
  return (
    <p className="pt-4 pb-4 italic bg-white px-3 dark:bg-slate-800 dark:text-white">
      {message || 'Cautarea nu a returnat niciun rezultat.'}
    </p>
  );
};

export default MessageNoRows;
