import React, {FC} from 'react';
import {ICommentModel} from "@/models/CommentModel";
interface IProps {
    comment : ICommentModel
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h4>post id :{comment.postId}. comment id :{comment.id} - {comment.name}</h4>
            <p>{comment.body}</p>
            <hr/>
        </div>
    );
};

export default CommentComponent;