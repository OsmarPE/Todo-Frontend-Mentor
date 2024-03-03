import { actionsButton } from "../assets/helpers/utils"
import { actionsTypeProps } from "../types"
import ButtonAction from "./ButtonAction"

interface Props extends actionsTypeProps{
    length:number,
    clearTodo:() => void
}

function TodoListActions({length,clearTodo,action,setAction}:Props) {
  return (
    <div className='p-4 bg-lightGray100 dark:bg-darkBlue200 text-sm flex items-center justify-between gap-4 text-lightBlue200 dark:text-darkGray300'>
        <span className="block">{length} items left</span>
        <div className="hidden md:flex items-center gap-4">
        {actionsButton.map((btn,index) => <ButtonAction action={action} title={btn} key={index} onClick={() => setAction(btn)}/> )}
        </div>
        <button className="dark:hover:text-darkGrayHover transition duration-300 hover:text-lightBlue300" onClick={clearTodo}>Clear Completed</button>
    </div>
  )
}

export default TodoListActions