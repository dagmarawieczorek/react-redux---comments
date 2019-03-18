export const ADD_COMMENT ="ADD_COMMENT";
export const REMOVE_COMMENT ="REMOVE_COMMENT";
export const EDIT_COMMENT ="EDIT_COMMENT";
export const VOTE_UP ="VOTE_UP";
export const VOTE_DOWN ="VOTE_DOWN";

let commentID  = 0;

export const addComment = text => ({
    type: ADD_COMMENT,
    payload: {
        id: commentID++,
        text
    }
});

export const editComment = text => ({
    type: EDIT_COMMENT,
    payload: {
        text
    }
});

export const removeComment = id => ({
    type: REMOVE_COMMENT,
    payload: {
        id
    }
});

export const voteUp = id => ({
    type: VOTE_UP,
    payload: {
        id
    }
});

export const voteDown = id => ({
    type: VOTE_DOWN,
    payload: {
        id
    }
});

