import { YouTubeVideo } from '../types/youtube';
import { VideoCard } from './VideoCard';

interface VideoGridProps {
  videos: YouTubeVideo[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}