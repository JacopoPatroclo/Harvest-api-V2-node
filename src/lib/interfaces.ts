import { Request, NextFunction } from 'express';

export interface Options {
  ACCESS_TOKEN: string;
  ACCOUNT_ID: string;
  USER_AGENT: string;
}

export interface OptionsMiddleware {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  USER_AGENT: string;
}

export interface RequestOptions {
  method?: string;
  body?: string;
}

export interface TimeEntry {
  user_id?: string;
  client_id?: string;
  project_id?: string;
  is_billed?: string;
  is_running?: string;
  updated_since?: string;
  from?: string;
  to?: string;
  page?: string;
  per_page?: string;
}

export interface Hours {
  time_entry_id?: string;
  user_id?: string;
  project_id: string;
  task_id: string;
  spent_date: string;
  hours?: string;
  started_time?: string;
  ended_time?: string;
  notes: string;
  external_reference: string;
}

export interface FilterTask {
  is_active: string;
  updated_since: string;
  page: string;
  per_page: string;
}

export interface Task {
  task_id?: string;
  name: string;
  billable_by_default: string;
  default_hourly_rate: string;
  is_default: boolean;
  is_active: boolean;
}

export interface FilterExpanses {
  user_id: string;
  client_id: string;
  project_id: string;
  is_billed: boolean;
  updated_since: string;
  from: string;
  to: string;
  page: number;
  per_page: number;
}

export interface Expanse {
  expense_id?: string;
  user_id?: string;
  project_id: string;
  expense_category_id: string;
  spent_date: string;
  units?: string;
  total_cost?: string;
  notes?: string;
  billable?: boolean;
  receipt?: string;
  delete_receipt?: boolean;
}

export interface FilterCategories {
  is_active?: string;
  updated_since?: string;
  page?: number;
  per_page?: number;
}

export interface Categories {
  expanse_category_id?: string;
  is_active?: string;
  name?: string;
  unit_name?: number;
  unit_price?: number;
}

export interface FilterProjects {
  is_active?: string;
  updated_since?: string;
  client_id?: string;
  page?: number;
  per_page?: number;
}

export interface Project {
  project_id?: string;
  client_id?: string;
  name?: string;
  code?: string;
  is_active?: string;
  is_billable?: string;
  is_fixed_fee?: string;
  bill_by?: string;
  hourly_rate?: string;
  budget?: string;
  budget_by?: string;
  budget_is_monthly?: string;
  notify_when_over_budget?: string;
  over_budget_notification_percentage?: string;
  show_budget_to_all?: string;
  cost_budget?: string;
  cost_budget_include_expenses?: string;
  fee?: string;
  notes?: string;
  starts_on?: string;
  ends_on?: string;
}

export interface Client {
  request: (resurce: string, option?: RequestOptions) => Promise<any>;
}

export interface UsersApi {
  me: () => Promise<any>;
  all: () => Promise<any>;
  project_assignments: (idUser: string, page: number) => Promise<any>;
  my_project_assignments: (page: number) => Promise<any>;
}

export interface RolesApi {
  all: () => Promise<any>;
  get: (id: string) => Promise<any>;
  create: (name: string, user_ids: Array<string>) => Promise<any>;
  update: (id: string, name: string, user_ids: Array<string>) => Promise<any>;
  delete: (id: string) => Promise<any>;
}

export interface TimeEntriesApi {
  all: (timentry: TimeEntry) => Promise<any>;
  get: (id: string) => Promise<TimeEntry>;
  createHours: (hours: Hours) => Promise<Hours>;
  createStartStop: (hours: Hours) => Promise<Hours>;
  update: (hours: Hours) => Promise<Hours>;
  deleteExternalRef: (time_entry_id: string) => Promise<any>;
  delete: (time_entry_id: string) => Promise<any>;
  restart: (time_entry_id: string) => Promise<any>;
  stop: (time_entry_id: string) => Promise<any>;
}

export interface TaskApi {
  all: (filters: FilterTask) => Promise<any>;
  get: (id: string) => Promise<Task>;
  create: (task: Task) => Promise<Task>;
  update: (task: Task) => Promise<Task>;
  delete: (task_id: string) => Promise<any>;
}

export interface CategoriesApi {
  all: (filters: FilterCategories) => Promise<any>;
  get: (expense_category_id: string) => Promise<Categories>;
  create: (task: Categories) => Promise<Categories>;
  update: (task: Categories) => Promise<Categories>;
  delete: (expense_category_id: string) => Promise<any>;
}

export interface ExpansesApi {
  categories: CategoriesApi;
  all: (filters: FilterExpanses) => Promise<any>;
  get: (expense_id: string) => Promise<Expanse>;
  create: (expanse: Expanse) => Promise<Expanse>;
  update: (expanse: Expanse) => Promise<Expanse>;
  delete: (expense_id: string) => Promise<any>;
}

export interface ProjectsApi {
  task_assignment: any;
  user_assignment: any;
  all: (filters: FilterProjects) => Promise<any>;
  get: (project_id: string) => Promise<Project>;
  create: (task: Project) => Promise<Project>;
  update: (task: Project) => Promise<Project>;
  delete: (project_id: string) => Promise<any>;
}

export interface RequestOauth2Decorated extends Request {
  Oauth2Harvest?: {
    account_id: string;
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
  };
  query: {
    scope: string;
    code: string;
  };
}

export interface Oauth2Data {
  utils: {
    refreshToken: (refresh_token: string) => Promise<any>;
  };
  redirectMiddleware: (req: Request, res: Response, next: NextFunction) => any;
  acceptMiddleware: (
    req: RequestOauth2Decorated,
    res: Response,
    next: NextFunction
  ) => any;
}

export interface RootApi {
  users: UsersApi;
  roles: RolesApi;
  time_entries: TimeEntriesApi;
  tasks: TaskApi;
  expanses: ExpansesApi;
  projects: ProjectsApi;
}
