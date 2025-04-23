import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between">
                <input value={todo.title}
                    onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} className="form-control w-50" />
                <div>
                    <button onClick={() => dispatch(addTodo(todo))}
                        id="wd-add-todo-click" className="btn btn-success me-1"> Add </button>
                    <button onClick={() => dispatch(updateTodo(todo))}
                        id="wd-update-todo-click" className="btn btn-warning me-1"> Update </button>
                </div>
            </div>
        </li>
    );
}