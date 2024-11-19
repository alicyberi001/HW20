export interface IUserAuthLoginRes {
  token: string;
  record: {
    id: string;
    collectionId: string;
    collectionName: string;
    username: string;
    verified: boolean;
    emailVisibility: boolean;
    email: string;
    created: string;
    updated: string;
    name: string;
    avatar: string;
  };
}

export interface IParams {
  identity: string;
  password: string;
}

export interface ICreateTaskRes {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  Title: string;
  Description: string;
  Priority: string;
  completed: boolean;
}

export interface IFetchTasksRes {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: ICreateTaskRes[];
}
