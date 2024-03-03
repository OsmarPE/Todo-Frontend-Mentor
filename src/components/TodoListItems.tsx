import './TodoListItems.css'
function TodoListItems({ children }: { children: React.ReactNode }) {
  return <div className="shadow-primary overflow-hidden rounded-md">{children}</div>;
}

export default TodoListItems;
