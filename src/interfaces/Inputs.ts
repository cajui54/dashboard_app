export interface IFocusInput {
    [index: string]: string
}
export interface ILoginInputs {
    login: string,
    password: string,
}
export interface IUserInputs {
    login: string,
    password: string,
    ra: string,
    firstName: string,
    lastName: string,
    status: boolean,
    type: string,
}

export type UserKey = 'login' | 'password' | 'ra' | 'firstName' | 'lastName' | 'status' | 'type';