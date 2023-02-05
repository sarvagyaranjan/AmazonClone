import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/dist/client/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({
    id, title, price, description, rating, category, image, hasPrime }) {

    const dispatch = useDispatch()
    const addItemtoBasket = () => {
        const product = {
            id, title, price, description, rating, category, image, hasPrime

        }

        // push items to redux
        dispatch(addItemtoBasket())



    }
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className='grid grid-cols-5 space-y-8 '>
            <Image src={image} height={200} width={200} objectFit='contain' />

            {/* middle */}

            <div className='col-span-3 mx-5 '>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    ))}
                </div>

                <p className='text-xs  line-clamp-3 my-2'>{description}</p>
                <Currency quantity={price} currency='USD' />
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img loading='lazy' className='w-12' src="https://links.papareact.com/fdw" alt="prime" />
                        <p className='text-xs text-gray-500'>Free Next Delivery</p>
                    </div>
                )}


            </div>
            {/* Right add/remove button */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button' onClick={addItemtoBasket}>Add to Cart</button>
                <button className='button' onClick={removeItemFromBasket}>Remove from cart</button>
            </div>

        </div>
    )
}

export default CheckoutProduct