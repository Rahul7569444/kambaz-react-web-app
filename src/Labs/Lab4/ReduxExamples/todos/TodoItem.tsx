import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            <div className="d-flex justify-content-between">
                {todo.title}
                <div>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}
                        id="wd-delete-todo-click" className="btn btn-danger me-1"> Delete </button>
                    <button onClick={() => dispatch(setTodo(todo))}
                        id="wd-set-todo-click" className="btn btn-primary me-1"> Edit </button>
                </div>
            </div>
        </li>
    );
}