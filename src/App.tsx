import "./App.css";
import { filterTodo } from "./assets/helpers/utils";
import Container from "./components/Container";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoActions from "./components/TodoActions";
import TodoItem from "./components/TodoItem";
import TodoListActions from "./components/TodoListActions";
import TodoList from "./components/TodoListItems";
import useTodo from "./hooks/useTodo";


function App() {

  const { action,todo, mode, changeAction, setTask, removeTask,changeMode , changeCompleteTask,clearTodo} = useTodo()

  const todoLength = todo.length
  const todoIncompletes = filterTodo(todo,'active').length
  const todoFilter = filterTodo(todo,action)


  return (
      <Container>
        <Header mode={mode} setMode={changeMode}/>
        <main className="grid gap-4 md:gap-8 mt-6 md:mt-10">
          <Form setTask={setTask} />
          <TodoList>
            {
              todoFilter.map(item => <TodoItem removeTask={removeTask} changeCompleteTask={changeCompleteTask} key={item.id} todo={item}/>)
            }
        {todoLength > 0 && <TodoListActions length={todoIncompletes} clearTodo={clearTodo} action={action} setAction={changeAction}/> }
          </TodoList>
          {todoLength > 0 && <TodoActions action={action} setAction={changeAction} />}
        </main>
      </Container>
  );
}

export default App;
