import React from 'react'
// import Line from './line.svg';
import Comment from './comment.svg';
import Heart from './heart.svg';
// import HearFilled from './heartFilled.svg';
import Share from './share.svg';

const Post = ({modalPost}) => {
    return (
        <div className={modalPost ? "flex justify-center items-center w-full h-full" :"mx-auto h-full w-5/6 flex z-50 py-5 px-7"}>
                <img src={modalPost ? modalPost.img : "/images/1.jpg"} alt="" className={modalPost ? "w-3/4 h-3/4 object-cover" :"w-2/3 h-full object-cover"} />
                <div className={modalPost ? "hidden" :"w-1/3 bg-white"}>
                    <div className="h-full border-2 w-full  relative">
                        <div className="items-center flex p-3">
                            <img src={modalPost ? modalPost.img : "/images/1.jpg"} alt="" className="rounded-full w-12 h-12 object-cover" />
                            <h1 className="text-xl ml-2 mr-2">{modalPost.username}</h1>
                            <button className="bg-blue-500 text-white hover:bg-blue-700 transition-all border-none outline-none px-3 py-1 rounded-md text-lg">Follow</button>
                        </div>
                        <div className="w-full bg-gray-200 h-1-px"></div>
                        <div className="flex flex-col p-3 h-500 overflow-y-scroll">
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                            <div className="flex items-center mb-5">
                                <img src="/images/1.jpg" alt="" className="rounded-full w-10 h-10 object-cover mr-2" />
                                <p>Comment</p>   
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 h-1-px "></div>
                        <div className="flex items-center w-full pt-2 pl-4">
                            <img src={Heart} alt="" className="mr-3 cursor-pointer"  />
                            {/* <img src={HearFilled} alt="" className="mr-3 cursor-pointer"/> */}
                            <img src={Comment} alt=""  className="mr-3 cursor-pointer"/>
                            <img src={Share} alt="" className="cursor-pointer"/>
                        </div>
                        <div className="flex flex-col pt-2 pl-4 mb-2">
                            <div className="flex items-center mb-1">
                                <span className="mr-1">{modalPost.likes}</span>
                                <span>Likes</span>
                            </div>
                            <div className="flex items-center">
                                <span>2 hours ago</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full pl-4 pr-3 ">
                            <input type="text" placeholder="add comment..." className="w-80 py-1 outline-none"/>
                            <button className="text-white bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-md">Post</button> 
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Post;
