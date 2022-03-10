import React from 'react';
const NavIcon = (props) => {
    const {open, setOpen} = props;
    return (
        <>
        <img src="/images/1.jpg" alt="" onClick={() => setOpen(!open)} className="w-10 h-10 rounded-full object-cover cursor-pointer"/>
        {open && props.children}
        </>
    )
}

export default NavIcon;
