import { actionsType } from "../types";

function ButtonAction({onClick,action,title}:{onClick:() => void,action:actionsType,title:actionsType}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm capitalize font-bold ${
        action === title
          ? "text-bluePrimary"
          : "text-lightBlue200 dark:text-darkGray200"
      } transition duration-300 hover:text-lightBlue300 dark:hover:text-darkGrayHover`}
    >
      {title}
    </button>
  );
}

export default ButtonAction;
