import { format } from 'date-fns';
import { ExternalLink, Play } from 'lucide-react';
import { YouTubeVideo } from '../types/youtube';

interface VideoCardProps {
  video: YouTubeVideo;
}

export function VideoCard({ video }: VideoCardProps) {
  const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
  
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block aspect-video">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity 
                        flex items-center justify-center">
            <Play className="w-12 h-12 text-white" />
          </div>
        </a>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
            {video.snippet.title}
          </h3>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors flex-shrink-0"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-600">
            {video.snippet.channelTitle}
          </p>
          <p className="text-sm text-gray-500">
            {format(new Date(video.snippet.publishedAt), 'PPP')}
          </p>
          <p className="text-sm text-gray-600 line-clamp-2">
            {video.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
}