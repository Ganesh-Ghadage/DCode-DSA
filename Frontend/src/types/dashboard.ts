export interface ContributionEntry {
  date: string;
  count: number;
}

export interface RecentActivityItem {
  id: string;
  createdAt: string;
  problem: {
    id: string;
    title: string;
    tags: string[];
  };
}

export interface DashboardData {
  streaks: {
    current: number,
    longest: number
  };
  contributions: ContributionEntry[];
  progress: {
    byDifficulty: [{
      difficulty: string,
      total: number,
      solved: number
    }],
    byTag: [{
      tag: string,
      total: number,
      solved: number
    }],
  };
  recentActivity: RecentActivityItem[];
  submissionData: {
    totalSubmissions: number,
    acceptedCount: number,
    acceptedPercent: string
  },
  milestones: {
    next: string,
    totalSolved: number,
    totalProblems: number
  };
}
