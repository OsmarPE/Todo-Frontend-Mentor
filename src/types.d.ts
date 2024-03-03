
export type actionsType = "all" | "active" | "completed";

interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export type modeType = 'dark' | 'light'

export interface StateType {
  todo: TodoType[];
  action: actionsType;
  mode: modeType,
  text:string
}

export type TodoAction =
  | { type: "ADD_TODO"; payload: TodoType }
  | { type: "REMOVE_TODO"; payload: number }
  | { type: "CHANGE_COMPLETED"; payload: number }
  | { type: "CLEAN_TODO"}
  | { type: "SET_ACTION"; payload: actionsType }
  | { type: "CHANGE_MODE"; payload: modeType }
  | { type: "SET_TEXT"; payload: string }

export interface actionsTypeProps{
  action:actionsType,
  setAction:(action: actionsType) => void
}
