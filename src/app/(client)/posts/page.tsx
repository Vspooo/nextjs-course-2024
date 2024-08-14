import React from 'react';
import PostsComponent from "@/components/posts/PostsComponent";
import {postApiService} from "@/servicres/post.api.service";

const PostsPage = async () => {
    const posts = await postApiService.getAllPosts();
    return (
        <div>
            {<PostsComponent posts={posts}/>}
        </div>
    );
};

export default PostsPage;