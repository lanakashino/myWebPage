export interface Education {
  title: string;
  dateRange: string;
  institution: string;
  transcript: CourseCluster[];
}

export interface CourseCluster {
  name: string
  code: string
  courses: string[]
}
