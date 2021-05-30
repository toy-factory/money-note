import { useState } from 'react';
import Link from 'next/link';

import $ from './Header.module.scss';
import LoginButton from './LoginButton';
import UserInfo from './UserInfo';

const Header = () => {
  const [isAuthenticated] = useState(false);

  return (
    <header className={$.header__container}>
      <Link href="/">
        <a>
          <img className={$.header__logo} src="/images/logo.png" alt="logo" />
        </a>
      </Link>
      {isAuthenticated ? <UserInfo userName="taewan" /> : <LoginButton />}
    </header>
  );
};

export default Header;
