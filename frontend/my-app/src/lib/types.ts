export type Post = {
  id: string;
  editId: string;
  title: string;
  description: string;
  content: string;
  author: {
    username: string;
    id: string;
  };
  created_at: string;
  updated_at: string;
  Slug: string;
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type PageData = {
  data: {
    post: Post;
  };
};

export type Auth = {
  id: number;
  email: string;
  description: string;
  username: string;
}

export type AuthData = {
  data: {
    auth: Auth;
  }
}


export interface User {
  id: string;
  username: string;
  email: string;
  jwt: string;
}

