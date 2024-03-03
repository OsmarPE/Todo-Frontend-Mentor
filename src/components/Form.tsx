import { FormEvent, useState } from "react";
import Checkbox from "./Checkbox";
import { TodoType } from "../types";

interface Props {
  setTask: (task: TodoType) => void;
}

function Form({ setTask }: Props) {
  const [text, setText] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) return;

    const task: TodoType = {
      id: Date.now(),
      completed,
      text,
    };

    setTask(task);
    setText("");
    setCompleted(false)
  };

  const changeCompleted = () => {
    setCompleted(!completed)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center gap-4 px-4 bg-lightGray100 dark:bg-darkBlue200 rounded-md overflow-hidden"
    >
      <Checkbox completed={completed} setCompleted={changeCompleted} />
      <input
        className=" flex-1 h-14 caret-bluePrimary bg-transparent border-0 outline-none text-lightBlue200 dark:text-darkGray100 placeholder:text-sm"
        type="text"
        value={text}
        placeholder="Create a new todo..."
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default Form;
