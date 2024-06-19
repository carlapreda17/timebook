import { useRouter } from 'next/router';
import { Link } from '.';
import { classnames } from '../lib';

const MenuItem = ({ href, children, level = 1 }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Link href={href}>
      <a
        className={classnames(
          'menu-item default-item',
          level == 2 && 'mx-4 my-0.5 ml-11',
          pathname === href &&
            'text-primary font-medium bg-blue-50 dark:bg-sky-500/5 dark:hover:bg-sky-500/5 dark:text-sky-500 dark:hover:text-sky-500'
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default MenuItem;
