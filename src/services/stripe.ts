import Stripe from 'stripe';
import { version } from '../../package.json';

const key = process.env.STRIPE_API_KEY || ''

export const stripe = new Stripe(
  key,
  {
    apiVersion: '2022-08-01',
    appInfo: {
      name: 'Ignews',
      version
    },
  }
);