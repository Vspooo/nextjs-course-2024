import React, {FC} from 'react';
import {postApiService} from "@/servicres/post.api.service";
import PostComponent from "@/components/posts/PostComponent";

interface IProps {
    params: {
        id: string
    }
}

const PostPage = async ({params}: IProps) => {
    const userId = params.id
    const posts = await postApiService.getPostsById(+userId)
    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostPage;