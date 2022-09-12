import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { stripe } from '../../services/stripe'
import Home, { getStaticProps } from '../../pages/Home'

jest.mock('../../services/stripe')

describe('Home page', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Home product={{ priceId: 'fake-price-id', amount: 'R$10,00' }} />,
      { wrapper: BrowserRouter }
    )

    expect(getByText('for R$10,00 month')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const retrieveStripePricesMocked = jest.mocked(stripe.prices.retrieve)

    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 1000,
    } as any)

    const response = await getStaticProps()

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00'
          }
        }
      })
    )
  })
})