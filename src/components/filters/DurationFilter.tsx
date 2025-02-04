import { Clock } from "lucide-react";

const DURATION_OPTIONS = [
  { value: "any", label: "N'importe quelle durée" },
  { value: "short", label: "Court (< 4 minutes)" },
  { value: "medium", label: "4-20 minutes" },
  { value: "long", label: "> 20 minutes" },
] as const;

interface DurationFilterProps {
  value: string;
  onChange: (value: "any" | "short" | "medium" | "long") => void;
}

export function DurationFilter({ value, onChange }: DurationFilterProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Durée</label>
      <div className="relative">
        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as any)}
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        >
          {DURATION_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
