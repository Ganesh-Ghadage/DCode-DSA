import { type Playlist, type Problem } from './index';

export interface ProblemInPlaylist {
  id: string;
  problemId: string;
  playlistId: string;
  createdAt: string;
  updatedAt: string;

  playlist?: Playlist;
  problem?: Problem;
}
