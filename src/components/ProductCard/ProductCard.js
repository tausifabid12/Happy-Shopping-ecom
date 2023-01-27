import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/basketSlice';

const ProductCard = ({ product }) => {
  const { title, rating, price, image, category, id, description } = product;
  const [ratingS, setRatingS] = useState(Math.floor(Math.random() * 5) + 1);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };

  return (
    <div className="w-full relative overflow-hidden bg-white rounded-lg shadow-md border dark:bg-gray-800">
      <div className="flex justify-center">
        <Image
          src={image}
          height={200}
          width={250}
          objectFit="contain"
          objectPosition={'center'}
        />
      </div>
      <div className="px-6 pt-6 pb-14 capitalize">
        <h1 className="text-sm font-semibold line-clamp-2  text-gray-800 dark:text-white">
          {title}
        </h1>
        <div className="flex text-primary">
          {Array(ratingS)
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="h-5" />
            ))}
        </div>

        <p className="py-2 text-sm text-gray-700 line-clamp-2 dark:text-gray-400">
          {description.length > 60
            ? description.slice(0, 60) + '...'
            : description}
        </p>
        <p className="py-2 text-gray-900 font-bold dark:text-gray-400">
          <CurrencyFormat
            value={price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </p>
      </div>
      <div className="px-4 absolute bottom-3 w-full ">
        <button
          onClick={addItemToBasket}
          className="block font-semibold w-full btn py-3 bg-primary rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
