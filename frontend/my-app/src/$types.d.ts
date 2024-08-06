export type PostAttributes = {
    title: string;
    description: string;
    content: string;
    author: {
        data: {
            attributes: {
                username: string;
            };
        };
    };
    publishedAt: string;
};

export type Post = {
    id: string;
    attributes: PostAttributes;
};

export type PageData = {
    props: {
        posts: Post[];
    };
};
