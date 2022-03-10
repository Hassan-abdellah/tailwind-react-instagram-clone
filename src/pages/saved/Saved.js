import React from 'react'
import SavedIcon from '../profile/save.svg';
const Saved = () => {
    return (
        <div className="flex h-80 items-center justify-center">
            <div className="flex flex-col items-center">
                <img src={SavedIcon} alt="" className="w-10 h-10" />
                <span className="text-lg mt-2">No Saved Posts</span>
            </div>
        </div>
    )
}

export default Saved;
