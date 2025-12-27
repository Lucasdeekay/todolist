import { Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  // Define any props if needed
  onClick: (task: string) => void;
}

const Input = ({ onClick }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyPress = (e: React.KeyboardEvent) => {
    return e.key === "Enter"
  };

  return (
    <div className="relative group max-w-md my-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyPress ?? onClick(inputValue)}
        placeholder="Add a new task..."
        className="w-full h-14 pl-6 pr-16 bg-white border border-slate-200 rounded-full 
                     shadow-sm transition-all duration-200 ease-in-out
                     placeholder:text-slate-400 text-slate-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                     hover:border-slate-300"
      />

      {/* Plus Button */}
      <button
        onClick={() => {
          onClick(inputValue);
          setInputValue("");
        }}
        disabled={!inputValue.trim()}
        className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center
                     bg-green-600 text-white rounded-full transition-all duration-200
                     hover:bg-green-700 active:scale-95 disabled:bg-green-200 
                     disabled:cursor-not-allowed disabled:scale-100
                     shadow-sm hover:shadow-md"
        aria-label="Add item"
      >
        <Plus size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default Input;
