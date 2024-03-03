import { TodoType, actionsType } from "../../types";

export const filterTodo = (todo:TodoType[], action:actionsType) => {
    if (action === 'all') return todo
    if (action === 'active') return todo.filter(item => !item.completed )
    return todo.filter(item => item.completed )
} 