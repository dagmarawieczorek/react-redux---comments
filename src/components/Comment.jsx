
import React from "react" ;
import {voteUp, voteDown, removeComment} from "../actions/actions";
import { connect } from "react-redux";

const CommentRaw = ({text, votes, id, voteUp, voteDown, removeComment}) =>(

    <li>
           <span>{text}</span> 
         {/* <input value={text} ></input> */}
        <button onClick={() => voteDown(id)}>Vote Down</button>
        <span>votes: {votes}</span>
          <button onClick={() => voteUp(id)}>Vote Up</button>
          <button onClick={() => removeComment(id)}>X</button>
      </li>
)

export const Comment = connect(
    null,
    { voteUp , voteDown, removeComment }
  )(CommentRaw);