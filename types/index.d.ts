import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export enum ProjectStatus {
  ABANDONED = 'abandoned',
  ACQUIRED = 'acquired',
  ACTIVE = 'active',
  WIP = 'wip',
}

export interface Project extends ParsedContent {
  name: string;
  url: string;
  description: string;
  thumbnail: string;
  status?: ProjectStatus;
}
