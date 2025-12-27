import { Edit2, Trash2, CircleCheck, CircleX } from "lucide-react";

export interface TodoItem {
  task: string;
  completed: boolean;
  date: number;
}

interface Props {
  color?: "green" | "red" | "blue";
  items: TodoItem[];
  subtitle?: string;
  title: string;
}

// Map color prop to specific Tailwind classes to avoid JIT interpolation issues
const colorMap = {
  green: {
    bg: "bg-green-900",
    bgTransparent: "bg-green-900/30",
    bgItem: "bg-green-900/40",
    border: "border-green-100",
    hoverBorder: "hover:border-green-200",
    accent: "bg-green-100/50",
    text: "text-white-900",
  },
  red: {
    bg: "bg-red-900",
    bgTransparent: "bg-red-900/30",
    bgItem: "bg-red-900/40",
    border: "border-red-100",
    hoverBorder: "hover:border-red-200",
    accent: "bg-red-100/50",
    text: "text-white-900",
  },
  blue: {
    bg: "bg-blue-900",
    bgTransparent: "bg-blue-900/30",
    bgItem: "bg-blue-900/40",
    border: "border-blue-100",
    hoverBorder: "hover:border-blue-200",
    accent: "bg-blue-100/50",
    text: "text-white-900",
  },
};

const ListModal = ({ color = "blue", items, subtitle, title }: Props) => {
  const styles = colorMap[color] || colorMap.blue;

  return (
    <div
      className={`${styles.bgTransparent} w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300`}
    >
      {/* Header */}
      <div
        className={`px-8 pt-8 pb-6 mb-6 flex items-center justify-between ${styles.bg}`}
      >
        <div>
          <h2 className={`text-2xl font-bold text-white`}>{title}</h2>
          <p className="text-white text-sm mt-1">
            {subtitle || "Review and organize your recent entries"}
          </p>
        </div>
      </div>

      {/* List of Cards */}
      <div className="px-6 pb-8 overflow-y-auto max-h-[500px] space-y-3">
        {items.map((item) => (
          <div
            key={item.date}
            className={`group ${styles.bgItem} border ${styles.border} rounded-2xl p-4 flex items-center gap-4 transition-all duration-200 hover:shadow-md ${styles.hoverBorder} hover:-translate-y-0.5`}
          >
            {/* Prefix Icon Box */}
            <div
              className={`w-12 h-12 rounded-xl ${styles.bg} flex items-center justify-center shrink-0 transition-colors`}
            >
              {item.completed ? (
                <CircleCheck size={24} className="text-white" />
              ) : (
                <CircleX size={24} className="text-white" />
              )}
            </div>

            {/* Content */}
            <div className="flex-grow min-w-0">
              <h4 className="font-semibold text-black-800 truncate">
                {item.task}
              </h4>
              <p className="text-xs text-black-400 font-medium uppercase tracking-wider">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                title="Edit"
                className="p-2.5 text-black-400 text-white bg-blue-900 rounded-lg transition-all"
              >
                <Edit2 size={18} />
              </button>
              <button
                title="Delete"
                className="p-2.5 text-black-400 text-white bg-red-900 rounded-lg transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-black-100 rounded-3xl">
            <p className="text-black-400">Your list is currently empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListModal;
