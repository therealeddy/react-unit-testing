import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { useHistory } from 'react-router-dom'
import SubscribeButton from '../../components/SubscribeButton'
import { useSession } from '../../hooks/useSession';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

jest.mock('../../hooks/useSession')

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<SubscribeButton />)

    expect(getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    const { getByText } = render(<SubscribeButton />)

    const subscribeButton = getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(subscribeButton).toHaveClass('signIn')
  })

  it('redirects to posts when user already has a subscription', () => {
    const useHistoryMocked = jest.mocked(useHistory)
    const useSessionMocked = jest.mocked(useSession)

    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce({
      user: {
        name: 'Eduardo'
      },
      activeSubscription: true
    })
    
    useHistoryMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    const { getByText } = render(<SubscribeButton />)

    const subscribeButton = getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(pushMock).toHaveBeenCalled()
  })
})