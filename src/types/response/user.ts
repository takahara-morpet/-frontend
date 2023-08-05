export type User = {
    username: string;
    last?: string;
    last_kana?: string;
    first?: string;
    first_kan?: string;
    icon_url?: string;
    status_text?: string;
};

export type UserDetail = {
    username: string;
    last?: string;
    last_kana?: string;
    first?: string;
    first_kan?: string;
    icon_url?: string;
    status_text?: string;
    background_url?: string;
    intro_text?: string;
    private_memo?: string;
    line_url?: string;
    discord_url?: string;
    twitter_url?: string;
    github_url?: string;
};
