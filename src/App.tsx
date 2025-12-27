import Header from "./components/Header";
import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import ListModal, { type TodoItem } from "./components/ListModal";

function App() {

  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const handleSaveTodo = (task: string) => {
    setTodoList((prev) => [
      ...prev,
      { task, completed: false, date: Date.now() },
    ]);
    console.log("Todo:", todoList);
  }

  return (
    <>
      <div className="container mx-auto my-8 font-serif">
        <Header />
        <Input onClick={handleSaveTodo} />
        <div className="flex flex-3 gap-3">
          <ListModal
            color="blue"
            items={todoList}
            title="Today"
            subtitle="Manage your tasks"
          />
          <ListModal
            color="red"
            items={todoList}
            title="Tomorrow"
            subtitle="Plan ahead"
          />
          <ListModal
            color="green"
            items={todoList}
            title="Completed"
            subtitle="Job Done"
          />
        </div>
      </div>
    </>
  );
}

export default App;
