import { TodoType } from "../types";
import Checkbox from "./Checkbox";
import './todoitem.css'

interface Props{
  todo:TodoType,
  removeTask: (id: number) => void,
  changeCompleteTask :(id: number) => void
}

function TodoItem({todo,removeTask,changeCompleteTask}:Props) {
  
  const { text , id, completed } = todo
  
  return (
    <div className="w-full flex border-b border-b-lightGray200 dark:border-b-darkGray400 last-of-type:border-0 items-center gap-4 p-4 bg-lightGray100 dark:bg-darkBlue200">
        <Checkbox completed={completed} setCompleted={() => changeCompleteTask(id)} />
        <div className="todo__body flex items-center gap-2 w-full">
          <p className={`text-sm md:text-base flex-1 cursor-pointer ${completed ? 'text-lightBlue100 dark:text-darkGray200 line-through' : 'text-lightBlue300 dark:text-darkGray100'}`}>
            {text}
          </p>
        <button onClick={() => removeTask(id) } className="opacity-0 cursor-pointer">
          <img className="w-4" src="icon-cross.svg" alt="icon of remove" />
        </button>
        </div>
    </div>
  );
}

export default TodoItem;
