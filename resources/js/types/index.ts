export interface Task {
  id: number;
  name: string;
  description: string;
  created_at: string;
  due_date: string;
  status: 'pending' | 'completed' | 'in_progress';
  image_path: string;
  created_by: number;
  updated_by: number;
}

export interface Links {
  first: string;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface Meta {
  current_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
}

export interface TaskResponse {
  data: Task[];
  links: Links;
  meta: Meta;
}
