import { getDate } from './Helpers/Date'

function userReducer(state, action) {
    switch (action.type){
        case "LOGIN":
            return {
                username: action.username,
                access_token: action.access_token,
                };
        case "REGISTER":
            return action.username;
        case "LOGOUT":
            return null;
        default:
            return state;
    }
}

function postReducer(state, action) {
    switch (action.type){
        case "CREATE_TODO":
            const newTodo = {
                title: action.title,
                content: action.content,
                author: action.author,
                _id: action._id,
                created: getDate(),
                completed: false,
                dateCompleted: ""
              };
            return [...state, newTodo];

        //  Need to update DELETE and COMPLETED
        case "DELETE_TODO":
            return state.filter(todo => todo._id !== action.payload._id);
        case "COMPLETED":
            return state.map(todo => {
                if(todo._id === action.payload._id){
                    return {...todo, completed: !todo.completed, dateCompleted: getDate()};
                }
                return todo;
            })
        case "FETCH_TODOS":
            return action.todos;
        case "CLEAR_TODOS":
            return [];
        default:
            return state;
    }
}

// const newTodo = (payload) => {
//     return {
//         title: payload.title,
//         content: payload.content,
//         author: payload.author,
//         id: payload.id,
//         created: getDate(),
//         completed: false,
//         dateCompleted: ""
//     };
// }


export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        todos: postReducer(state.todos, action)
    };
}