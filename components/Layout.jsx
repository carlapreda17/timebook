import { ErrorBoundary, Menu, MenuButton, Notifications, Profile, ThemeToggle } from '.';

const Layout = ({ role = 'user', title, children }) => {
  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 dark:bg-slate-900 flex">
      <Menu role={role} />
      <main className="w-full lg:col-span-5 gap-4">
        <div className="w-full bg-white dark:bg-slate-900 border-b dark:border-b-slate-800">
          <div className="flex max w-full sm:gap-2 gap-1 items-center py-4 sm:px-8 px-4">
            <div className="flex flex-1">
              <h3 className="text-2xl dark:text-white font-semibold">{title}</h3>
            </div>
            <ThemeToggle />
            <Notifications />
            <Profile />
            <MenuButton />
          </div>
        </div>
        <div className="max grid p-4 lg:p-8 gap-4">
          <ErrorBoundary>
            <div>{children}</div>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
};

export default Layout;
