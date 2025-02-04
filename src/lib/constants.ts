export const DEFAULT_SEARCH_TERMS = [
  'artificial intelligence',
  'intelligence artificielle'
] as const;

export const YOUTUBE_API_CONFIG = {
  MAX_RESULTS: 50,
  REFRESH_INTERVAL: 1800000, // 30 minutes
  BASE_URL: 'https://www.googleapis.com/youtube/v3/search'
} as const;