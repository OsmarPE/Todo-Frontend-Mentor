import { actionsButton } from "../assets/helpers/utils";
import { actionsTypeProps } from "../types";
import ButtonAction from "./ButtonAction";

function TodoActions({action,setAction}:actionsTypeProps) {  

  return (
    <div className="p-4 md:hidden bg-lightGray100 shadow-primary  dark:bg-darkBlue200 rounded-md flex items-center justify-center gap-4">
      {actionsButton.map((btn,index) => <ButtonAction action={action} title={btn} key={index} onClick={() => setAction(btn)}/> )}
    </div>
  );
}

export default TodoActions;
