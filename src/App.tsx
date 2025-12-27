import Header from "./components/Header";
import "./App.css";
import Input from "./components/Input";

function App() {

  const handleClick = (task: string) => {
    console.log("New Task:", task);
  }
  
  return (
    <>
      <div className="container mx-auto my-8 font-serif">
        <Header />
        <Input onClick={handleClick} />
      </div>
    </>
  );
}

export default App;
