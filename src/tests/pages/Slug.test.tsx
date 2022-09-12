import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Slug from '../../pages/Posts/Slug'

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post excerpt</p>',
  updatedAt: '10 de Abril',
}

describe('Slug page', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Slug post={post} />, { wrapper: BrowserRouter })

    expect(getByText('My New Post')).toBeInTheDocument()
    expect(getByText('Post excerpt')).toBeInTheDocument()
  })
})