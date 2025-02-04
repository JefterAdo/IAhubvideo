import { FilterOptions } from "../../types/filters";
import { AiCategories } from "./AiCategories";
import { DateRangeFilter } from "./DateRangeFilter";
import { SortByFilter } from "./SortByFilter";
import { DurationFilter } from "./DurationFilter";
import { LanguageFilter } from "./LanguageFilter";
import { SlidersHorizontal } from "lucide-react";

interface FilterPanelProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  const updateFilter = <K extends keyof FilterOptions>(
    key: K,
    value: FilterOptions[K]
  ) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Filtres Avancés</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AiCategories
          selected={filters.aiCategory}
          onChange={(value) => updateFilter("aiCategory", value)}
        />
        <DateRangeFilter
          value={filters.dateRange}
          onChange={(value) => updateFilter("dateRange", value)}
        />
        <SortByFilter
          value={filters.sortBy}
          onChange={(value) => updateFilter("sortBy", value)}
        />
        <DurationFilter
          value={filters.duration}
          onChange={(value) => updateFilter("duration", value)}
        />
        <LanguageFilter
          value={filters.language}
          onChange={(value) => updateFilter("language", value)}
        />
      </div>
    </div>
  );
}
