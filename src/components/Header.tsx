import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CiShoppingCart  } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='shadow-md flex py-4 justify-between items-center px-10'>

                <Link to={'/'} className="logo poppins-bold  flex items-center border-2 ">
                    <span className="bg-black text-white py-2 px-2">Ecom</span>
                    <span className="  px-2">Plus + </span>
                </Link>

                <ul className="flex items-center gap-x-2">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li >
                       <Link to={'/orders'} className='relative'>
                       <span className="absolute -top-2 -left-1 bg-black text-white px-2 text-sm  rounded-2xl">0</span>
                       <CiShoppingCart  className='text-3xl' /></Link>
                    </li>
                </ul>

    </nav>
  )
}

export default Header