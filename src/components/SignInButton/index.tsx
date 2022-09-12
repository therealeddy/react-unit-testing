import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useSession } from '../../hooks/useSession';

const SignInButton: React.FC = () => {
  const session = useSession()

  function signOut() {
    console.log('signOut')
  }

  function signIn(value: string) {
    console.log('signIn', value)
  }

  return session ? (
    <button 
      type="button"
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      { session.user.name }
      <FiX color="#737380" />
    </button>
  ) : (
    <button 
      type="button"
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}

export default SignInButton;