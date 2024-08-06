export type Post = {
    id: string;
    title: string;
    description: string;
    content: string;
    author: null;
    created_at: string;
    updated_at: string;
    Slug: string;
};

export type PageData = {
    data: {
      post: Post;
    };
  };
  
