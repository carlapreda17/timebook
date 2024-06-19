import { Link } from '.';
import { sitename } from '../site.config';

const Logo = ({ role }) => {
  return (
    <Link href={`/${role}`}>
      <div className="logo flex items-start cursor-pointer">
        <img className="dark:brightness-0 dark:invert" src="/images/logo.png" alt={sitename} />
      </div>
    </Link>
  );
};

export default Logo;
