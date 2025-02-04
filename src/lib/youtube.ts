import axios from 'axios';
import { YouTubeVideo } from '../types/youtube';
import { FilterOptions } from '../types/filters';
import { YOUTUBE_API_CONFIG } from './constants';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function fetchYouTubeVideos(searchQuery?: string, filters?: FilterOptions) {
  try {
    const baseQuery = searchQuery || filters?.aiCategory.join(' OR ') || 'artificial intelligence';
    
    const params = {
      part: 'snippet',
      maxResults: YOUTUBE_API_CONFIG.MAX_RESULTS,
      q: baseQuery,
      type: 'video',
      order: filters?.sortBy || 'date',
      key: YOUTUBE_API_KEY,
      ...(filters?.dateRange !== 'all' && {
        publishedAfter: getPublishedAfterDate(filters?.dateRange)
      }),
      ...(filters?.duration !== 'any' && {
        videoDuration: filters?.duration
      })
    };

    const response = await axios.get(YOUTUBE_API_CONFIG.BASE_URL, { params });
    return response.data.items as YouTubeVideo[];
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

function getPublishedAfterDate(dateRange?: string): string {
  const date = new Date();
  switch (dateRange) {
    case 'today':
      date.setHours(0, 0, 0, 0);
      break;
    case 'week':
      date.setDate(date.getDate() - 7);
      break;
    case 'month':
      date.setMonth(date.getMonth() - 1);
      break;
    case 'year':
      date.setFullYear(date.getFullYear() - 1);
      break;
    default:
      return '';
  }
  return date.toISOString();
}