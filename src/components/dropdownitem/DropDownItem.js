import React from 'react'
import { Link } from 'react-router-dom';
const DropDownItem = (props) => {
    return (
        <Link to={props.to} 
              className={props.className ? `${props.className} h-12 text-grey-200 p-2 flex items-center hover:bg-gray-200` : "h-12 text-grey-200 rounded-lg p-2 flex items-center hover:bg-gray-200"}>
            <span className="w-5 h-5 rounded-full mr-2 text-white flex justify-center items-center">{props.icon}</span>
            {props.children}
        </Link>
    )
}

export default DropDownItem;
