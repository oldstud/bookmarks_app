export  interface LoginDataI { 
    email: string;
    password: string;
}

export interface SignInDataI extends LoginDataI{
    name?: string;
    avatar?: string;
}