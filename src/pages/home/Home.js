import React from 'react'
import {posts} from '../../data';
import Card from '../../components/Card';

const Home = () => {
    return (
        <div>
            {posts.map(post => (
                <Card key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Home;
