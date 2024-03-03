import './checkbox.css'
interface Props{
  completed:boolean,
  setCompleted?: () => void
}
function Checkbox({completed,setCompleted}:Props) {

  
  return (
    <div className="size-6 overflow-hidden relative rounded-full border border-lightBlue100 dark:border-darkGray400">
      <input onChange={() => setCompleted?.()} checked={completed} className="input__check cursor-pointer absolute inset-0 opacity-0 " type="checkbox" />
      <div className="absolute pointer-events-none inset-0 z-10  bg-gradient-to-br from-gradientFrom to-gradientTo grid place-items-center">
        <img src="icon-check.svg" alt="icon of check" />
      </div>
    </div>
  );
}



export default Checkbox;
