import { format } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import { YouTubeVideo } from '../../types/youtube';

interface VideoCardProps {
  video: YouTubeVideo;
}

export function VideoCard({ video }: VideoCardProps) {
  const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          className="w-full h-48 object-cover"
        />
      </a>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-2">{video.snippet.title}</h3>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          {video.snippet.channelTitle}
        </p>
        <p className="text-sm text-gray-500 mb-3">
          {format(new Date(video.snippet.publishedAt), 'PPP')}
        </p>
        <p className="text-sm text-gray-700 line-clamp-2">
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
}