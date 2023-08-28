import Todo from './Todo';

function TodoList({ todos, deleteTodo }) {
    return (
        <>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
            ))}
        </>
    );
}

export default TodoList;
