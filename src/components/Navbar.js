import React, { useEffect, useState } from 'react'
import Instagram from './logo.png';
import Home from './home.svg';
import Explore from './svgs/explore.svg';
import Search from './svgs/search.svg';
import Notification from './svgs/notification.svg';
import Plus from './svgs/plus.svg';
import Heart from '../pages/post/heart.svg';
import { Link } from 'react-router-dom';
import NavIcon from './icon/NavIcon';
import DropDownMenu from './dropdownmenu/DropDownMenu';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {

        const getClickOutside = (e) => {
            if (open && !e.target.classList.contains('.dropdownmenu')) {
                setOpen(false);
            }
        };
        document.addEventListener('click', getClickOutside);
        return () => {
            document.removeEventListener('click', getClickOutside);
        }
    }, [open]);
    return (
        <div className="w-screen fixed top-0 left-0 z-50 bg-white border-b border-grey-200">
            <div className='container max-w-5xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-sm my-0 mx-auto'>
                <nav className="py-2 flex items-center sm:justify-between justify-around">
                    <Link to="/">
                        <div className="flex items-center">
                            <img src={Instagram} alt="logo" className="object-cover w-32" />

                        </div>
                    </Link>
                    <div className="sm:relative sm:flex sm:items-center hidden">
                        <input type="text" placeholder="search people posts...." className="outline-none py-1 px-4 w-80 border border-gray-300 rounded-md" />
                        <img src={Search} alt="" className="w-6 h-6 absolute right-2 cursor-pointer bg-white z-50" />
                    </div>
                    <div className="flex items-center justify-center">
                        <NavLink to="/">
                            <img src={Home} alt="" className="w-8 h-8 mr-3"/>
                        </NavLink>
                        <Link to="/explore">
                            <img src={Explore} alt="" className="w-8 h-8 mr-3"/>
                        </Link>
                        <img src={Plus} alt="" className="hidden sm:inline-block w-8 h-8 mr-3 cursor-pointer" />
                        <img src={Heart} alt="" className="hidden sm:inline-block w-8 h-8 mr-3 cursor-pointer" />
                        <img src={Notification} alt="" className=" hidden sm:inline-block w-8 h-8 mr-3 cursor-pointer" />
                        <NavIcon open={open} setOpen={setOpen} >
                            <DropDownMenu setOpen={setOpen} oepn={open} />
                        </NavIcon>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
