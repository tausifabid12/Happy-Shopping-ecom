import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem/CartItem';
import Layout from '../components/Layout/Layout';
import {
  removeFromBasket,
  selectItems,
  selectTotal,
} from '../slices/basketSlice';

const stripePromise = loadStripe(process.env.stripe_public_key);

const Cart = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  const removeItemToBasket = (id) => {
    dispatch(removeFromBasket(id));
  };

  console.log(process.env.FIREBASE_apiKey);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post(
      '/api/create-checkout-session',
      {}
    );
  };

  return (
    <Layout title="Your Cart">
      <div className="flex flex-col w-full  p-6 space-y-4 sm:p-10  ">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {/*-----------------------cart items ---------------------- */}

          {items.map((item) => (
            <CartItem
              key={item?.id}
              itemInfo={item}
              removeItemToBasket={removeItemToBasket}
            ></CartItem>
          ))}

          {/* --------------------- cart items ---------------- */}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">
              {
                <CurrencyFormat
                  value={total}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              }
            </span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-md border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>

          {/* <form action="/create-checkout-session" method="POST"> */}
          <button
            onClick={createCheckoutSession}
            role="link"
            className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400"
            type="submit"
          >
            Checkout
          </button>
          {/* </form> */}
          {/* <button
            type="button"
            className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button> */}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
