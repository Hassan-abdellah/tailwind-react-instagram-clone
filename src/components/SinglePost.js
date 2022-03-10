import React from 'react'
import Heart from '../pages/post/heart.svg';
import Comment from '../pages/post/comment.svg';
// import Modal from './Modal';
const SinglePost = ({post , setModalPost, setModalOpen}) => {
    const triggerModal = () => {
        setModalOpen(true);
        setModalPost(post);
    }
    return (
        <div className="relative group cursor-pointer " onClick={triggerModal}>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white opacity-0 group-hover:opacity-50 transition-all duration-1000 ease-in-out">
                        <div className="flex items-center mr-5 z-50">
                            <img src={Heart} alt="" className="w-5 h-5 mr-1"/>
                            <span>{post.likes}</span>
                        </div>   
                        <div className="flex items-center z-50">
                            <img src={Comment} alt="" className="w-5 h-5 mr-1"/>
                            <span>{post.comments}</span>
                        </div>                               
                    </div>
                        {/* <div className='w-full h-64 animate-pulse bg-slate-700'> */}
                    <img src={post.img} alt="" className="w-full h-32 sm:h-64 object-cover" />
                        {/* </div> */}
        </div>
    )
}

export default SinglePost;
