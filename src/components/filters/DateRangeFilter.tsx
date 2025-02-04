import { Calendar } from "lucide-react";

const DATE_OPTIONS = [
  { value: "today", label: "Aujourd'hui" },
  { value: "week", label: "Cette semaine" },
  { value: "month", label: "Ce mois-ci" },
  { value: "year", label: "Cette année" },
  { value: "all", label: "Tout le temps" },
] as const;

interface DateRangeFilterProps {
  value: string;
  onChange: (value: "today" | "week" | "month" | "year" | "all") => void;
}

export function DateRangeFilter({ value, onChange }: DateRangeFilterProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Plage de dates
      </label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as any)}
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          {DATE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
