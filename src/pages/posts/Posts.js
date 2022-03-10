import React from 'react'
import SinglePost from '../../components/SinglePost';
import {posts} from '../../data';
const Posts = ({setModalPost, setModalOpen}) => {
    return (
        <div className="conatiner xl:max-w-5xl lg:max-w-4xl md:max-w-2xl max-w-sm my-0 mx-auto">
            <section className="grid sm:gap-3 gap-1 grid-cols-3 mt-5 pb-10">
                { posts && posts.map(post => (
                    <SinglePost post={post} key={post.id} setModalOpen={setModalOpen} setModalPost={setModalPost}/>
                ))}
            </section>
        </div>
    )
}

export default Posts;
