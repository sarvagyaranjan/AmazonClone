import React from 'react'
import Image from "next/image"
import {
    MenuIcon, SearchIcon, ShoppingCartIcon
} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

function Header() {
    // const [session] = useSession()
    const { data: session } = useSession();
    const router = useRouter()
    const items = useSelector(selectItems);


    return (
        <header>
            {/* Top Nav */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0' >
                    <Image onClick={() => router.push('/')} src='https://links.papareact.com/f90' width={150} height={40} objectFit='contain' className='cursor-pointer' />
                </div>

                <div className=' h-10 rounded-md flex-grow cursor-pointer items-center hidden sm:flex bg-yellow-400 hover:bg-yellow-500'>
                    <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' />
                    <SearchIcon className='h-12 p-4' />
                </div>
                <div className='text-white flex items-center mx-6 text-xs space-x-6 whitespace-nowrap'>
                    <div onClick={!session ? signIn : signOut} className='link'>
                        <p className='font-bold'>{session ? `Hello, ${session.user.name}` : `Sign In`}</p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>
                    <div className='link'>
                        <p className='font-extrabold md:text-sm'>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className='relative link flex items-center' onClick={() => router.push('/checkout')
                    }>
                        <span className='absolute h-4 w-4 text-black rounded-full text-center bg-yellow-400 top-0 right-0 md:right-10'>{items.length}</span>
                        <ShoppingCartIcon className='h-10 cursor-pointer' />
                        <p className='font-extrabold hidden md:inline mt-2'>Basket</p>
                    </div>
                </div>
            </div>
            {/* Right */}

            {/* Bottom Nav */}
            <div className='flex space-x-3 pl-6 p-2 lg:text-sm xl:text-base items-center bg-amazon_blue-light text-white'>

                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' />
                    All</p>

                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Todays Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>


            </div>

        </header>
    )
}

export default Header