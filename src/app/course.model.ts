export interface CourseModule {
  title: string;
  description: string;
  duration: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accentColor: string;
  duration: string;
  level: string;
  certification: string;
  modules: CourseModule[];
  outcomes: string[];
  prerequisites: string[];
}

