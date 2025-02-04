export interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
  };
}