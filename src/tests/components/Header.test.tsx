import React from 'react'
import { render } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import Header from '../../components/Header'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/'
  }),
}));

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />, { wrapper: BrowserRouter })

    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('Posts')).toBeInTheDocument()
  })
})