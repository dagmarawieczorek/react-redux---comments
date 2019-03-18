
import React from "react" ;
import { Comment } from "./Comment";
import CommentInput from "./CommentInput";

import { connect } from "react-redux";

const CommentsListRaw = ({comments}) =>(

    <div>
        <CommentInput></CommentInput>
            <ul>
      {comments.map(comment => (
        
        <Comment key={comment.id} {...comment} />
      ))}
    </ul>
    </div>

  );

  const mapStateToProps = state => ({
    comments: state.comments
  });
  
export const CommentList = connect(mapStateToProps)(CommentsListRaw);