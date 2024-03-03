import { useReducer } from "react";
import { StateType, TodoAction, TodoType, actionsType, modeType } from "../types";

const reducer = (state: StateType, action: TodoAction): StateType => {
  const { todo } = state;
  const { type } = action;

  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, { ...action.payload }],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todo: todo.filter((item) => item.id !== action.payload),
      };
    case "CHANGE_COMPLETED":
      return {
        ...state,
        todo: todo.map((item) =>
          item.id !== action.payload
            ? item
            : { ...item, completed: !item.completed }
        ),
      };
    case "CLEAN_TODO":
      return { ...state, todo: [] };

    case "SET_ACTION":
      return {
        ...state,
        action: action.payload,
      };
    case "CHANGE_MODE":
      return {
        ...state,
        mode:action.payload,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.payload,
      };

    default:
      return state;
  }
};

function useTodo() {
  const state: StateType = {
    todo: [],
    action: "all",
    mode: "dark",
    text: "",
  };
  const [{ todo, action, mode, text }, dispath] = useReducer(reducer, state);

  const setTask = (item: TodoType) => {
    dispath({ type: "ADD_TODO", payload: item });
  };
  const changeAction = (action: actionsType) => {
    dispath({ type: "SET_ACTION", payload: action });
  };
  const setText = (text: string) => {
    dispath({ type: "SET_TEXT", payload: text });
  };
  const clearTodo = () => {
    dispath({ type: "CLEAN_TODO" });
  };
  const removeTask = (id:number) => {
    dispath({ type: "REMOVE_TODO",payload:id});
  };
  const changeMode = (mode:modeType) => {
    dispath({ type: "CHANGE_MODE",payload:mode});
  };
  const changeCompleteTask = (id:number) => {
    dispath({ type: "CHANGE_COMPLETED",payload:id});
  };

  return {
    todo,
    action,
    mode,
    text,
    changeAction,
    setText,
    setTask,
    clearTodo,
    removeTask,
    changeMode,
    changeCompleteTask
  };
}

export default useTodo;
