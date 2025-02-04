import { useState } from "react";
import useSWR from "swr";
import { fetchYouTubeVideos } from "./lib/youtube";
import { Layout } from "./components/Layout";
import { VideoGrid } from "./components/VideoGrid";
import { LoadingSpinner } from "./components/ui/LoadingSpinner";
import { ErrorMessage } from "./components/ui/ErrorMessage";
import { FilterPanel } from "./components/filters/FilterPanel";
import { FilterOptions, DEFAULT_FILTERS } from "./types/filters";
import { YOUTUBE_API_CONFIG } from "./lib/constants";

export function App() {
  const [filters, setFilters] = useState<FilterOptions>(DEFAULT_FILTERS);

  const {
    data: videos,
    error,
    isLoading,
  } = useSWR(
    ["youtube-videos", filters],
    () => fetchYouTubeVideos(undefined, filters),
    { refreshInterval: YOUTUBE_API_CONFIG.REFRESH_INTERVAL }
  );

  return (
    <Layout>
      <FilterPanel filters={filters} onFilterChange={setFilters} />
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      {videos && <VideoGrid videos={videos} />}
    </Layout>
  );
}
