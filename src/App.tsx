import Header from "./components/Header";
import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import ListModal, { type TodoItem } from "./components/ListModal";

function App() {

  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const handleSaveTodo = (task: string) => {
    setTodoList((prev) => {
      // Find the max ID in the current list to auto-increment
      const maxId =
        prev.length > 0
          ? Math.max(...prev.map((item) => item.id || 0))
          : 0;

      const nextId = maxId + 1;

      return [
        ...prev,
        { id: nextId, task, completed: false, date: Date.now() },
      ];
    });
  };

  const handleToggle = (id: number) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="container mx-auto my-8 font-serif">
        <Header />
        <Input onClick={handleSaveTodo} />
        <div className="flex flex-3 gap-3">
          <ListModal
            title="Today"
            items={todoList.filter((i) => !i.completed)}
            color="blue"
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
          <ListModal
            title="Completed"
            items={todoList.filter((i) => i.completed)}
            color="green"
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
