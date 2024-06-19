const PageHeader = ({ children }) => {
  return (
    <div className="bg-primary text-white rounded-t-xl">
      <div className="flex flex-col gap-2 justify-between p-4">{children}</div>
    </div>
  );
};

export default PageHeader;
