import { getDate } from './Helpers/Date'

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
        case "CREATE_TODO":
            return [...state, newTodo(action.payload)];
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        case "COMPLETED":
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    return {...todo, completed: !todo.completed, dateCompleted: getDate()};
                }
                return todo;
            })
        case "FETCH_TODOS":
            return action.todos;
        default:
            return state;
    }
}

const newTodo = (payload) => {
    return {
        title: payload.title,
        content: payload.content,
        author: payload.author,
        id: payload.id,
        created: getDate(),
        completed: false,
        dateCompleted: ""
    };
}


export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        todos: postReducer(state.todos, action)
    };
}