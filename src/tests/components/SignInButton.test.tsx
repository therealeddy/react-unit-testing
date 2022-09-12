import React from 'react'
import { render } from '@testing-library/react'
import SignInButton from '../../components/SignInButton'
import { useSession } from '../../hooks/useSession'

jest.mock('../../hooks/useSession')

describe('SignInButton component', () => {
  it('renders correctly when user is not authentication', () => {
    const { getByText } = render(<SignInButton />)

    expect(getByText('Sign in with Github')).toBeInTheDocument()
  })

  it('renders correctly when user is authentication', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      user: {
        name: 'Eduardo'
      }
    } as any)

    const { getByText } = render(<SignInButton />)

    expect(getByText('Eduardo')).toBeInTheDocument()
  })
})