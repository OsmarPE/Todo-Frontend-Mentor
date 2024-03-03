
interface Props{
    length:number,
    clearTodo:() => void
}

function TodoListActions({length,clearTodo}:Props) {
  return (
    <div className='p-4 bg-lightGray100 dark:bg-darkBlue200 text-sm flex items-center justify-between gap-4 text-lightBlue200 dark:text-darkGray300'>
        <span>{length} items left</span>
        <button className="" onClick={clearTodo}>Clear Completed</button>
    </div>
  )
}

export default TodoListActions