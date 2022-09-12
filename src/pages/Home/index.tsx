import React from 'react';
import SubscribeButton from '../../components/SubscribeButton';
import { stripe } from '../../services/stripe';

interface HomeProps {
  product: {
    priceId: string,
    amount: string,
  }
}

const Home: React.FC<HomeProps> = ({ product }) => {
  return (
    <>
      <main>
        <section>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for { product.amount } month</span>
          </p>
          <SubscribeButton />
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IYJ7WCrN0slKqO6rQQZVvOz');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price.unit_amount || 0) / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
};

export default Home;