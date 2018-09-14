import { edit, create, read, get } from '../data/Crud'
import { validate } from '../data/Credentials'

export type user = {
    id: number;
    name: string;
    password: string;
    email: string;
    active: boolean;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export function createUser(user: user, token: string): Promise<any> {
    return create(user, token)
        .then((response: any) => { return (response.data) })
        .catch((error: any) => { throw (error) })
}

export function editUser(user: user, token: string): Promise<any> {
    return edit(user, token)
        .then((response: any) => { return (response.data) })
        .catch((error: any) => { throw (error) })
}

export function readUser(id: number, token: string): Promise<any> {
    return read(id, token)
        .then((response: any) => { return (response.data) })
        .catch((error: any) => { throw (error) })
}

export function getUsers(page: number, window: number, token: string): Promise<any> {
    return get(page, window, token)
        .then((response: any) => { console.log(response); return (response) })
        .catch((error: any) => { throw (error) })
}

export function validateUser(email: string, password: string): Promise<any> {
    return validate(email, password)
        .then((response: any) => { return ({ user: response.data.user, token: response.data.token }) })
        .catch((error: string) => { throw (error) })
}   