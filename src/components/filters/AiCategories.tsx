import { Check } from "lucide-react";

const AI_CATEGORIES = [
  "artificial intelligence",
  "machine learning",
  "deep learning",
  "neural networks",
  "computer vision",
  "natural language processing",
  "robotics",
  "AI ethics",
];

interface AiCategoriesProps {
  selected: string[];
  onChange: (categories: string[]) => void;
}

export function AiCategories({ selected, onChange }: AiCategoriesProps) {
  const toggleCategory = (category: string) => {
    const newSelection = selected.includes(category)
      ? selected.filter((c) => c !== category)
      : [...selected, category];
    onChange(newSelection);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Sujets IA
      </label>
      <div className="space-y-1 max-h-40 overflow-y-auto">
        {AI_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`flex items-center w-full px-3 py-1.5 text-sm rounded-md transition-colors
              ${
                selected.includes(category)
                  ? "bg-blue-50 text-blue-700"
                  : "hover:bg-gray-50"
              }`}
          >
            <span className="w-5 h-5 mr-2">
              {selected.includes(category) && <Check className="w-4 h-4" />}
            </span>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
