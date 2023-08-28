import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return (
        <>
            {todos.map((todo) => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </>
    );
}

export default TodoList;
