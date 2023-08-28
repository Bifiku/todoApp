import { useState } from 'react';
import Button from '../UI/Button';
import style from './TodoForm.module.css';

function TodoForm({ addTodo }) {
    const [valueForm, setValueForm] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        addTodo(valueForm);
        setValueForm('');
    };

    return (
        <>
            <form
                className={style.todoFormContainer}
                onSubmit={submitForm}
            >
                <input
                    type="text"
                    placeholder="Enter your todo"
                    value={valueForm}
                    onChange={(e) => setValueForm(e.target.value)}
                />
                <Button type="submit">SUBMIT</Button>
            </form>
        </>
    );
}

export default TodoForm;
