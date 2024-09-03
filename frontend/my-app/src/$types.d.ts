export type Post = {
    id: string;
    title: string;
    description: string;
    content: string;
    author: {
      username: string;
    } | null;
    created_at: string;
    updated_at: string;
    Slug: string;
  };
  
  export type PageData = {
    props: {
      posts: Post[];
    };
  };
  