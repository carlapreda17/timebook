const ProjectCardError = () => {
  return (
    <div className="border flex flex-col justify-between rounded shadow duration-500 hover:scale-105 hover:cursor-pointer">
      <div className="p-4">
        <div className="flex justify-between mb-5">
          <div className="flex justify-between items-center w-full">
            <div className="h-8 w-40 bg-red-200 rounded-md"></div>
            <div className="h-12 w-12 bg-red-200 rounded-full"></div>
          </div>
        </div>
        <div className="h-4 bg-red-200 rounded-md w-full mb-4"></div>
        <div className="h-4 bg-red-200 rounded-md w-full"></div>
      </div>
      <div className="flex justify-between items-center border-t px-4 h-11">
        <div className="flex gap-3">
          <div className="h-7 w-7 bg-red-200 rounded-full"></div>
          <div className="h-7 w-7 bg-red-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardError;
