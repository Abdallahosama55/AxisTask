import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/Layout/axis.jpg';
import { setSearchQuery } from '../../Redux/cardsSlice';

function Navbar() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    dispatch(setSearchQuery(value)); 
  };

  return (
    <div className='bg-green-100 py-3 flex justify-center'>
      <nav className="bg-green-100 p-4 border-[1px] rounded-2xl fixed w-[95%]">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-lg font-bold">
            <Link to="/">
              <img src={Logo} alt='logo' className='w-[50px] h-[40px]'/>
            </Link>
          </div>

          {/* Search */}
          <div className="flex-1 ml-4 lg:px-24">
            <input
              type="text"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search contacts by first char in the name..."
              className="w-full px-3 py-2 rounded-md text-black focus:outline-none"
            />
          </div>

          {/* Menu */}
          <div className="text-white ml-4">
            <Link to="/" className="px-3 py-2 text-gray-700 rounded">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
