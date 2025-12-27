import { Plus } from "lucide-react";

const Input = () => {
  return (
    <div className="relative group">
      <input
        type="text"
        // value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        // onKeyDown={handleKeyPress}
        placeholder="Type something..."
        className="w-full h-14 pl-6 pr-16 bg-white border border-slate-200 rounded-full 
                     shadow-sm transition-all duration-200 ease-in-out
                     placeholder:text-slate-400 text-slate-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                     hover:border-slate-300"
      />

      {/* Plus Button */}
      <button
        // onClick={handleAdd}
        // disabled={!inputValue.trim()}
        className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center
                     bg-blue-600 text-white rounded-full transition-all duration-200
                     hover:bg-blue-700 active:scale-95 disabled:bg-slate-200 
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
