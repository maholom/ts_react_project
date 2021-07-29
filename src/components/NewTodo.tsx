import React, { useRef } from 'react'; //dve moznosti: useRef, nebo State

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null); //objekt ref
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value; //DOM elm, nebude nikdy hodnota null
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
