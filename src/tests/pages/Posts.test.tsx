import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Posts from '../../pages/Posts'

const posts = [
  {
    slug: 'my-new-post',
    title: 'My New Post',
    excerpt: 'Post excerpt',
    updatedAt: '10 de Abril',
  }
]

describe('Posts page', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Posts posts={posts} />, { wrapper: BrowserRouter })
    
    expect(getByText('My New Post')).toBeInTheDocument()
  })
})