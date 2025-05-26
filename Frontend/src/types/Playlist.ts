import { type User, type ProblemInPlaylist } from './index';

export interface Playlist {
  id: string;
  name: string;
  description?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;

  user?: User;
  problems?: ProblemInPlaylist[];
}
