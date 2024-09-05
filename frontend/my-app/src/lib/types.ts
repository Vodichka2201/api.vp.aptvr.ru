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
};

export type PageData = {
    data: {
      post: Post;
    };
  };
  export interface User {
    id: string;
    username: string;
    email: string;
    jwt: string;
  }
  