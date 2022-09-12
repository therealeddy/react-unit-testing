import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter, useHistory } from 'react-router-dom'

import Preview from '../../pages/Posts/Preview'
import { useSession } from '../../hooks/useSession';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

jest.mock('../../hooks/useSession')

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post excerpt</p>',
  updatedAt: '10 de Abril',
}

describe('Preview page', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Preview post={post} />, { wrapper: BrowserRouter })

    expect(getByText('My New Post')).toBeInTheDocument()
    expect(getByText('Post excerpt')).toBeInTheDocument()
    expect(getByText('Wanna continue reading?')).toBeInTheDocument()
  })

  it('redirects user to full post when user is subscribed', () => {

    const useHistoryMocked = jest.mocked(useHistory)
    const useSessionMocked = jest.mocked(useSession)
    const pushMock = jest.fn()

    useHistoryMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    useSessionMocked.mockReturnValueOnce({
      activeSubscription: true
    } as any)

    render(<Preview post={post} />, { wrapper: BrowserRouter })

    expect(pushMock).toHaveBeenCalledWith('/posts/my-new-post')
  })
})