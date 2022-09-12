import React from 'react';
import ActiveLink from '../ActiveLink';
import SignInButton from '../SignInButton';

const Header: React.FC = () => {
  return(
    <header>
      <nav>
        <ActiveLink activeClassName="active" to="/">
          Home
        </ActiveLink>
        <ActiveLink activeClassName="active" to="/posts">
          Posts
        </ActiveLink>
      </nav>
      <SignInButton />
    </header>
  );
}

export default Header