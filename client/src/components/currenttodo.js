import { getCurrentTodos,deleteTodo } from "../redux/actions/index";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../redux/actions/type';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Todo from "./currtodo";
import Tabs from "./navbar.js";

const Currenttodo = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch( getCurrentTodos() );
    }, []);
    
    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    

    const getTodos = () => {
        if (currentTab === ALL_TODOS) 
        {
            return todos;
        } 
        else if (currentTab === ACTIVE_TODOS) 
        {
            return todos.filter(todo => !todo.done);
        } 
        else if (currentTab === DONE_TODOS) 
        {
            return todos.filter(todo => todo.done);
        }
    };

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteTodo(_id));
            }
        });
    };

    return (
        <article className="CurrentTodo">
            <div>
                <Tabs currentTab={currentTab} />

                {
                    todos.some(todo => todo.done) ? (
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >Remove Done Todos</button>
                    ) : null
                }
            </div>
            <ul>
                {
                    getTodos().map(todo => (
                        <Todo key={todo._id} todo={todo} />
                    ))}
            </ul>
        </article>
    );
};

export default Currenttodo;
