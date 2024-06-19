import { Button } from '.';

const LoadMore = ({ fetchNextPage, hasNextPage, isFetchingNextPage }) => {
  if (!hasNextPage) {
    return null;
  }
  const handleClick = () => {
    if (typeof fetchNextPage === 'function') {
      fetchNextPage();
    }
  };

  return (
    <div className="">
      <Button
        className="button full primary text-xs py-2 px-8"
        onClick={handleClick}
        disabled={isFetchingNextPage}
      >
        Incarca mai mult
      </Button>
    </div>
  );
};

export default LoadMore;
