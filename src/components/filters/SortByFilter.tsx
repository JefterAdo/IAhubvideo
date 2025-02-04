import { ArrowUpDown } from "lucide-react";

const SORT_OPTIONS = [
  { value: "date", label: "Les plus récents" },
  { value: "relevance", label: "Les plus pertinents" },
  { value: "rating", label: "Les mieux notés" },
  { value: "viewCount", label: "Les plus vus" },
] as const;

interface SortByFilterProps {
  value: string;
  onChange: (value: "date" | "relevance" | "rating" | "viewCount") => void;
}

export function SortByFilter({ value, onChange }: SortByFilterProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Trier par
      </label>
      <div className="relative">
        <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as any)}
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
