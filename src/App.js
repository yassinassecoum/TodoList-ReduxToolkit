import { useSelector } from "react-redux";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

function App() {
  const completedTodos = useSelector((state) =>
    state.todos.value.filter((todo) => todo.completed === true)
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList React ReduxToolkit</h1>
        <AddTodo />
        <TodoList />
        Total Complete Items: {completedTodos.length}
      </header>
    </div>
  );
}

export default App;
