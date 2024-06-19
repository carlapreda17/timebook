import LoginFormRomanian from '../components/LoginFormRomanian';
import withoutAuth from '../auth/withoutAuth';
import Link from 'next/link';

const LoginPage = () => (
  <main className="cover min-h-screen sm:px-4 py-8 flex flex-col items-center sm:justify-center">
    <div className="flex flex-col sm:gap-8 gap-28 w-full sm:p-8 p-4 pb-0 sm:pb-4 bg-white sm:shadow rounded-lg max-w-md dark:bg-slate-900">
      <Link href="/login">
        <img
          className="sm:w-52 w-64 cursor-pointer mx-auto dark:brightness-0 dark:invert"
          src="/images/logo-wide.png"
          alt="logo"
        />
      </Link>
      <LoginFormRomanian />
    </div>
  </main>
);

export default withoutAuth(LoginPage);
