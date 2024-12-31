export type Post = {
    id: string;
    title: string;
    description: string;
    content: string;
    author: {
      id: number;
      email: string;
      username: string;
    } | null;
    created_at: string;
    updated_at: string;
    Slug: string;
  };
  
  export type PageData = {
    props: {
      posts: Post[];
      start: number;
      limit: number;
      pageCount: number;
    };
  };

  export type Auth = {
    id: number; // Изменено на number
    username: string;
    email: string;
    description: string;
    published_at: string; // Добавлено поле
    created_at: string; // Добавлено поле
    updated_at: string; // Добавлено поле
};

export type AuthData = {
    auth: Auth[]; // Массив объектов Auth
    start: number;
    limit: number;
    pageCount: number;
};
  