import React, { useEffect } from 'react';
import Post from '../pages/post/Post';
const Modal = ({setModalOpen , modalPost , modalOpen}) => {
    
    useEffect(() => {
        const getClickOutside = (e) => {
                    if(modalOpen && e.target.classList.contains('bg-opacity-50')){
                        setModalOpen(false);
                        // console.log('clicked')
                    }
                };
        document.addEventListener('click', getClickOutside);
        return () => {
            document.removeEventListener('click', getClickOutside);
        }
    },[modalOpen, setModalOpen]);
    return (
        <div className="fixed top-0 left-0 z-50 h-screen flex justify-center items-center w-screen bg-gray-400 bg-opacity-50">
            <button className="absolute top-5 right-5 text-white outline-none border-0 text-xl" onClick={() => setModalOpen(false)}>X</button>
            <Post modalPost={modalPost}/>
        </div>
    )
}

export default Modal;
