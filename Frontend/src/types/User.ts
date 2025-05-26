import { type UserRole } from './common';
import { type Problem, type Submission, type ProblemSolved, type Playlist, type Sheet } from './index';

export interface User {
  id: string;
  name?: string;
  email: string;
  image?: string;
  role: UserRole;
  password: string;
  refreshToken?: string;
  forgotPasswordToken?: string;
  forgotPasswordExpiry?: string;
  isEmailVerified: boolean;
  emailVerificationToken?: string;
  emailVerificationExpiry?: string;
  createdAt: string;
  updatedAt: string;

  prblems?: Problem[];
  submissions?: Submission[];
  problemSolved?: ProblemSolved[];
  playlists?: Playlist[];
  sheet?: Sheet[];
}
