import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

interface LanguageFilterProps {
  value: "en" | "fr";
  onChange: (value: "en" | "fr") => void;
}

export function LanguageFilter({ value, onChange }: LanguageFilterProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">Language</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">Français</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
