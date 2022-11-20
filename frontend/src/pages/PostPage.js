import React, { useEffect, useContext } from 'react';
import { useResource } from 'react-request-hook';
import { useParams, useNavigate } from "react-router-dom";
import Todo from '../Post/Todo';
import { StateContext } from '../Context/context';

export default function PostPage () {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state, dispatch } = useContext(StateContext);
  
    const [ todo, getTodo ] = useResource(() => ({
        url: `/post/${id}`,
        method: 'get',
        headers: {Authorization: `${state.user.access_token}`},
    }))

    useEffect(getTodo, [id]);

    useEffect(() => {
        navigate(`/post/${todo.data._id}`);
    }, [todo])
        

    return (
        <div>
            {(todo && todo.data)
                ? <Todo {...todo.data} />
                : 'Loading...'
            }
            <hr />
        </div>
    );
}