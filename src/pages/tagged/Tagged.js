import React from 'react'
import Person from '../profile/person.svg';
const Tagged = () => {
    return (
        <div className="flex h-80 items-center justify-center">
            <div className="flex flex-col items-center">
                <img src={Person} alt="" className="w-10 h-10" />
                <span className="text-lg mt-2">No Tagged Posts</span>
            </div>
        </div>
    )
}

export default Tagged;