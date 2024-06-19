const StatsError = () => {
  return (
    <article className="flex flex-col items-center gap-8">
      <section className="bg-primary text-white rounded-t-xl flex gap-20 w-full">
        <div>
          <div className="flex flex-row items-center p-4">
            <span className="h-8 w-40 bg-red-200 rounded-md animate-pulse" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-end gap-5">
              <span className="h-12 w-40 bg-red-200 rounded-md animate-pulse" />
              <span className="h-12 w-40 bg-red-200 rounded-md animate-pulse" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <span className="block h-8 w-40 bg-red-200 rounded-md animate-pulse mb-3"></span>
          <span className="block h-8 w-40 bg-red-200 rounded-md animate-pulse"></span>
        </div>
      </section>
      <div className="flex gap-2 w-full h-96">
        <div className="w-1/3 bg-white rounded-lg shadow-lg p-4">
          <span className="block h-full w-full bg-red-200 rounded-full animate-pulse"></span>
        </div>
        <div className="w-2/3 h-full bg-white rounded-lg shadow-lg p-4">
          <span className="block h-full w-full bg-red-200 rounded-md animate-pulse"></span>
        </div>
      </div>
    </article>
  );
};

export default StatsError;
