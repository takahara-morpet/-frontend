export type User = {
    username: string;
    last?: string;
    last_kana?: string;
    first?: string;
    first_kan?: string;
    icon_url?: string;
    status_text?: string;
  };
  
export type UserProfile = {
    background_url?: string;
    intro_text?: string;
    private_memo?: string;
    user_line?: string;
    use_discord?: boolean;
    use_twitter?: boolean;
    use_github?: boolean;
  };
