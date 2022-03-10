import React, { useRef } from 'react'
import DropDownItem from '../dropdownitem/DropDownItem';
import { ReactComponent as Cog } from '../svgs/cog.svg';
import { ReactComponent as LogoutIcon } from '../svgs/logout.svg';
import { ReactComponent as Person } from '../../pages/profile/person.svg';
import { ReactComponent as Saved } from '../../pages/profile/save.svg';
import { AnimatePresence, motion } from 'framer-motion';
const DropDownMenu = ({ setOpen, open }) => {
    const menuRef = useRef();
    return (
        <AnimatePresence>
            <motion.div 
                initial={{y: '-5%', opacity:0}}
                animate={{y: '0', opacity:1}}
                exit={{y: '-5%', opacity:0}}
                transition={{ type:"spring",stiffness: "100" ,easings:"easeInOut", duration:0.75}}
                className="dropdownmenu absolute top-16 right-[-50px] w-64 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md" 
                ref={menuRef}>
                <DropDownItem to="/profile" onClick={() => setOpen(false)} icon={<Person />}>Profile</DropDownItem>
                <DropDownItem to="/settings" onClick={() => setOpen(false)} icon={<Cog />}>Settings</DropDownItem>
                <DropDownItem to="/profile/saved" onClick={() => setOpen(false)} icon={<Saved />}>Saved</DropDownItem>
                <DropDownItem to="/login" className="border-t border-gray-200" onClick={() => setOpen(false)} icon={<LogoutIcon />}>Logout</DropDownItem>
            </motion.div>
        </AnimatePresence>
    )
}

export default DropDownMenu;
