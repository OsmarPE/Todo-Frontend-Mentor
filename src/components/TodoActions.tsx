import { actionsType } from "../types";

const actionsButton:actionsType[] = ["all", "active", "completed"];



function TodoActions({action,setAction}:{action:actionsType, setAction:(action: actionsType) => void}) {  

  return (
    <div className="p-4 bg-lightGray100  dark:bg-darkBlue200 rounded-md flex items-center justify-center gap-4">
      {actionsButton.map((btn,index) => (
        <button onClick={() => setAction(btn) } className={`text-sm capitalize font-bold ${action === btn ? 'text-bluePrimary' : 'text-lightBlue200 dark:text-darkGray200'  }`} key={index}>{btn}</button>
      ))}
    </div>
  );
}

export default TodoActions;
