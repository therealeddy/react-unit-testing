import React from 'react'
import { render } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import ActiveLink from '../../components/ActiveLink'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/'
  }),
}));

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ActiveLink to="/" activeClassName='active'>
        Home
      </ActiveLink>, 
      { wrapper: BrowserRouter }
    )

    expect(getByText('Home')).toBeInTheDocument()
  })

  it('adds active class if the link as currently active', () => {
    const { getByText } = render(
      <ActiveLink to="/" activeClassName='active'>
        Home
      </ActiveLink>,
      { wrapper: BrowserRouter }
    )

    expect(getByText('Home')).toHaveClass('active')
  })
})