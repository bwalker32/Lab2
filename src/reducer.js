function userReducer(state, action) {
    switch (action.type){
        case "LOGIN":
        case "REGISTER":
            return action.username;
        case "LOGOUT":
            return "";
        default:
            return state;
    }
}

function postReducer(state, action) {
    switch (action.type){
        case "CREATE_POST":
            const post = {
                id: action.id,
                author: action.user,
                text: action.text,
                dateCreated: action.dateCreated,
                dateCompleted: action.dateCompleted,
                isComplete: action.isComplete,
                title: action.title
            }
            return [...state, post];
        default:
            return state;
    }
}


export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        post: postReducer(state.post, action)
    };
}