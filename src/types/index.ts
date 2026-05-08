export interface AppGame {
  id: string;
  name: string;
  icon: string;
  description: string;
  rating: string;
  downloads: string;
  url: string;
  screenshots: string[];
  category?: string;
  isFeatured?: boolean;
}

export interface DeveloperInfo {
  name: string;
  id: string;
  url: string;
  logo?: string;
  description?: string;
  stats: {
    totalApps: number;
    totalDownloads: string;
    avgRating: string;
  };
}
