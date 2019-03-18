import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, VOTE_UP, VOTE_DOWN} from "../actions/actions";

export const commentsReducers = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        votes: 0
                    },
                    ...state
                ];
        case REMOVE_COMMENT:
            return  state.filter(comment => comment.id !== action.payload.id);

        case EDIT_COMMENT:
            return state.map(comment => comment.id === action.payload.id
                    ? {...comment, text : action.payload.text} : comment
                );

        case VOTE_UP :
            return state.map(comment=> comment.id ===action.payload.id
                    ?{...comment, votes: comment.votes+1} : comment
                );

        case VOTE_DOWN :
            return state.map(comment=> comment.id ===action.payload.id
                    ?{...comment, votes: comment.votes-1} : comment
                )

        default:
            return state;
    }
};