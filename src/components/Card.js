import React from 'react'
import Heart from '../pages/post/heart.svg';
import Comment from '../pages/post/comment.svg';
import Share from '../pages/post/share.svg';
const Card = ({post}) => {
    return (
        <div className="sm:mx-auto sm:h-800 sm:w-600 flex flex-col pt-2 pb-1 mt-10 mx-auto border w-5/6 border-gray-300 rounded-md">
                <div className="flex p-3">
                    <img src={post.img} alt="" className="rounded-full w-12 h-12 object-cover" />
                    <h1 className="text-xl ml-2 mr-2">{post.username}</h1>
                </div>
                <img src={post.img} alt="" className="w-full h-96 object-cover border-0" />
                <div className="w-full bg-white">
                    <div className="w-full  relative">
                        {/* <div className="w-full bg-gray-200 h-1-px"></div> */}
                        <div className="flex items-center mb-1 pt-2 pl-3">
                                <span className="mr-1">{post.likes}</span>
                                <span>Likes</span>
                        </div>
                        <div className="flex flex-col p-3 w-full">
                            <div className="flex items-center mb-3 ">
                                <h1 className="mr-2">Hassan Abdellah</h1>
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-3 ">
                                <h1 className="mr-2">Hassan Abdellah</h1>
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-3 ">
                                <h1 className="mr-2">Hassan Abdellah</h1>
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center ">
                                 <h1 className="mr-2">Hassan Abdellah</h1>
                                <p>Comment</p>   
                            </div>
                        </div>
                        {/* <div className="w-full bg-gray-100 h-1-px "></div> */}
                        <div className="flex items-center w-full pt-2 pl-4">
                            <img src={Heart} alt="" className="mr-3 cursor-pointer"  />
                            {/* <img src={HearFilled} alt="" className="mr-3 cursor-pointer"/> */}
                            <img src={Comment} alt=""  className="mr-3 cursor-pointer"/>
                            <img src={Share} alt="" className="cursor-pointer"/>
                        </div>
                        <div className="flex flex-col pt-2 pl-4 mb-3">
                            <div className="flex items-center">
                                <span>2 hours ago</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between w-full pt-3 pl-4 pr-3 border-t border-gray-300 ">
                            <input type="text" placeholder="add comment..." className="w-500 py-1 outline-none"/>
                            <button className="text-white bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-md">Post</button> 
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;
   