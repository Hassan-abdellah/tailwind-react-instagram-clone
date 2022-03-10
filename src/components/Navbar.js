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
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 mr-3' width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none"stroke="#200E32" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023" transform="translate(2.5 2)" /></svg>
                            {/* <img src={Home} alt="" className="w-10 h-10 mr-3 cursor-pointer" /> */}
                        </NavLink>
                        <Link to="/explore">
                            <img src={Explore} alt="" className="w-10 h-10 mr-3 cursor-pointer" />
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
