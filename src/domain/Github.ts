export type GithubUser = {
    login: string;
    avatar_url: string;
    html_url: string;
    bio: string;
    location: string;
    email: string;
}

export type Repository = {
    id: number;
    name: string;
    html_url: string;
    private: boolean;
    description: string;
}