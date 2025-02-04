export interface FilterOptions {
  dateRange: "today" | "week" | "month" | "year" | "all";
  aiCategory: string[];
  sortBy: "date" | "relevance" | "rating" | "viewCount";
  duration: "any" | "short" | "medium" | "long";
  language: "en" | "fr";
}

export const DEFAULT_FILTERS: FilterOptions = {
  dateRange: "month",
  aiCategory: ["artificial intelligence"],
  sortBy: "date",
  duration: "any",
  language: "en",
};
