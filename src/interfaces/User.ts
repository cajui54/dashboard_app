export interface IUser {
    readonly id: string,
    login: string,
    password: string,
    ra: string,
    firstName: string,
    lastName: string,
    status: boolean,
    type: string,
}

export type typesKeys = 'login'| 'password' | 'ra' | 'firstName' | 'lastName' | 'status' | 'type';