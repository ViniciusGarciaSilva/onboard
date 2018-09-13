import { edit, create, read, get } from '../data/Crud'

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

export function createUser(user: user, token: string): any {
    return create(user, token)
    .then((response: any) => {
        if(response.data==null&&response.errors!=null)
            return ({result: false, message: response.errors[0].message });
        if(response.data!=null)
            return ({result: true, message: "User Created" });
        return ({result: false, message: "ERROR" });
    });
}

export function editUser(user: user, token: string): any {
    return edit(user, token)
    .then((response: any) => {
        if(response.data==null&&response.errors!=null)
            return ({result: false, message: response.errors[0].message });
        if(response.data!=null)
            return ({result: true, message: "User Edited" });
        return ({result: false, message: "ERROR" });
        });
}

export function readUser(id: number, token: string): any {
    return read(id, token)
    .then((response: any) => {
        if(response.data==null&&response.errors!=null)
            return ({result: false, message: response.errors[0].message, user: null });
        if(response.data!=null)
            return ({result: true, message: "User Edited", user: response.data });
        return ({result: false, message: "ERROR", user: null });
    });
}

export function getUsers(page: number, window: number, token: string): any {
    return get(page, window, token)
    .then((response: any) => {
        if(response.data==null&&response.errors!=null)
            return ({result: false, message: response.errors[0].message, users: null });
        if(response.data!=null)
            return ({result: true, message: "Users!", user: response.data });
        return ({result: false, message: "ERROR", users: null });
    });     
}
