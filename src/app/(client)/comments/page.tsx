import React from 'react';
import {commentApiService} from "@/servicres/comment.api.service";
import CommentsComponent from "@/components/comments/CommentsComponent";

const CommentsPage = async () => {
    const comments = await commentApiService.getAllComments();
    return (
        <div>
            {<CommentsComponent comments={comments}/>}
        </div>
    );
};

export default CommentsPage;