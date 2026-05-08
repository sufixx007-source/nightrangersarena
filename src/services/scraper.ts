import { APPS_DATA, DEVELOPER_DATA } from '@/data/apps';
import { AppGame, DeveloperInfo } from '@/types';

export async function scrapeDeveloperData(): Promise<{ developer: DeveloperInfo; apps: AppGame[] }> {
  // We now use static data for 100% stability and performance
  return { 
    developer: DEVELOPER_DATA, 
    apps: APPS_DATA 
  };
}
